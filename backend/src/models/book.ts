import { InferSchemaType, model, Schema } from "mongoose";

const bookSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	description: { type: String, required: false }
},	{ timestamps: true });

type Book = InferSchemaType<typeof bookSchema>;

export default model<Book>("Book", bookSchema);
