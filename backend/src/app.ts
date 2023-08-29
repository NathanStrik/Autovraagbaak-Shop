import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import booksRoutes from "./routes/books";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const LOGGING_LEVEL = "dev";

const app = express();

app.use(morgan(LOGGING_LEVEL));

app.use(express.json());

app.use("/api/books", booksRoutes);

app.use((req, res, next) => {
	next(createHttpError(404, "Endpoint not found."));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	console.error(error);
	let statusCode = 500;
	let errorMessage = "An unknown error occured";
	if (isHttpError(error)) {
		statusCode = error.status;
		errorMessage = error.message;
	}
	res.status(statusCode).json({ error: errorMessage });
});

export default app;
