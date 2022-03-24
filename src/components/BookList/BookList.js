// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function BookList(props) {
// 	//Fetch the data to populate all the books or popluate books by genre passed through the params.
// 	const [books, setBooks] = useState([]);
// 	const { genre } = useParams();

// 	useEffect(() => {
// 		fetch('http://localhost:8000/books')
// 			.then((res) => {
// 				res.json();
// 			})
// 			.then((data) => {
// 				setBooks(data);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			<h2>Book Title</h2>
// 			<h3>Author:</h3>
// 			<p>Genre:</p>
// 		</div>
// 	);
// }

// export default BookList;
import React from 'react'

export default function BookList() {
  return (
	<div>BookList</div>
  )
}

