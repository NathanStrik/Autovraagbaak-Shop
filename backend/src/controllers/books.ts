import { RequestHandler } from "express";
import BookModel from "../models/book";

export const getBooks: RequestHandler = async (req, res, next) => {
	try {
		const books = await BookModel.find().exec();
		res.status(200).json(books);
	} catch (error) {
		next(error);
	}
}

export const createBook: RequestHandler = async (req, res, next) => {
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;

	try {
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