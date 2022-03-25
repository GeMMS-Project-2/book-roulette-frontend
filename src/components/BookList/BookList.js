import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

export default function BookList() {
	const [bookList, setBookList] = useState([]);
	const { genre } = useParams();
	useEffect(() => {
		fetch(`https://book-roulette.herokuapp.com/books/genre/${genre}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setBookList(data);
			})
			.catch((error) => {
				console.log('error');
			});
	}, [genre]);

	return (
		<div key=''>
			<div className='book-genre-container'>
				{bookList &&
					bookList.map((BookList) => (
						<div key={BookList._id}>
							<h2>
								{BookList.title} - {BookList.author}
							</h2>
						</div>
					))}
			</div>
		</div>
	);
}
