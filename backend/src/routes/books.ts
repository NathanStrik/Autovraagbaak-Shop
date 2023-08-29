import express from "express";
import * as BooksController from "../controllers/books";

const router = express.Router();

router.get("/", BooksController.getBooks);
router.get("/:bookId", BooksController.getBook);
router.post("/", BooksController.createBook);

export default router;
