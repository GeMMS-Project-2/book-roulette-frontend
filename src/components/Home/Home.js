import './Home.css';
import { useState } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';

export default function Home({ genre }) {
	const [searchGenre, setSearchGenre] = useState('');
	function handleSelect(e) {
		setSearchGenre(e.target.value);
		console.log(searchGenre);
	}

	return (
		<main id='main-content'>
			<div id='roulette-container'>
				<div>
					<h2>Find Your Next Favorite Book</h2>
				</div>
				<form action='' onChange={handleSelect}>
					<label htmlFor='selectGenre'>Pick a genre:</label>
					<select name='selectGenre' id='selectGenre' className='drop-down'>
						<option value='' className='option'>
							Select..
						</option>
						<option value='Fantasy' className='option'>
							Fantasy
						</option>
						<option value='Romance' className='option'>
							Romance
						</option>
						<option value='Education' className='option'>
							Education
						</option>
						<option value='Mystery' className='option'>
							Mystery
						</option>
						<option value='Thriller' className='option'>
							Thriller
						</option>
					</select>
				</form>
				<img
					src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
					alt=''
					id='roulette-img'
				/>

				<Link to={`/${searchGenre}`}>
					<button id='roulette-button'>Find your next book</button>
				</Link>
			</div>
		</main>
	);
}
