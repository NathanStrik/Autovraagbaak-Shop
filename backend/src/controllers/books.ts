import { RequestHandler } from "express";
import BookModel from "../models/book";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getBooks: RequestHandler = async (req, res, next) => {
	try {
		const books = await BookModel.find().exec();
		res.status(200).json(books);
	} catch (error) {
		next(error);
	}
}

export const getBook: RequestHandler = async (req, res, next) => {
	const bookId = req.params.bookId;

	try {
		if (!mongoose.isValidObjectId(bookId)) {
			throw createHttpError(400, "Invalid book ID.");
		}
		const book = await BookModel.findById(bookId).exec();
		if (!book) {
			throw createHttpError(404, "Book not found.");
		}
		res.status(200).json(book);
	} catch (error) {
		next(error);
	}
}

interface CreateBookBody {
	title?: string,
	author?: string,
	description?: string
}

export const createBook: RequestHandler<unknown, unknown, CreateBookBody, unknown> = async (req, res, next) => {
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;

	try {
		if (!title) {
			throw createHttpError(400, "Book title is mandatory.");
		}

		if (!author) {
			throw createHttpError(400, "Book author is mandatory.");
		}

		const newBook = await BookModel.create({
			title: title,
			author: author,
			description: description
		});

		res.status(201).json(newBook);
	} catch (error) {
		next(error);
	}
}
