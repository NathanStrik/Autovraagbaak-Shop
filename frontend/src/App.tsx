import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Book } from './models/book';

function App() {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		async function loadBooks() {
			try {
				const response = await fetch("/api/books", { method: "GET" });
				const books = await response.json();
				setBooks(books);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		loadBooks();
	}, []);

	return (
		<div className="App">
			{JSON.stringify(books)}
		</div>
	);
}

export default App;
