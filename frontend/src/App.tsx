import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Hello, this is basic UI!
			</p>
			<Button onClick={() => setCounter(counter + 1)}>
				Clicked {counter} times
			</Button>
		</header>
		</div>
	);
}

export default App;
