import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Book from './components/Book/Book';
import BookList from './components/BookList/BookList';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<>
			<header id='page-top'>
				<div id='button-nav-container'>
					<button id='button-nav'>Nav Icon</button>
				</div>
				<div id='title-nav-container'>
					<div id='title-nav'>
						<Link to='/'>
							<h1 id='page-title'>Book Roulette</h1>
						</Link>
					</div>
				</div>
			</header>
			<main id='main-content'>
				<Nav />
				<div id='roulette-container'>
					<div>
						<h2>Find Your Next Favorite Book</h2>
					</div>
					<input type='text' />
					<img
						src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
						alt=''
						id='roulette-img'
					/>
					<button id='roulette-button'>Get Suggestion</button>
				</div>
				<Routes>
					<Route path='/books' element={<BookList />} />
					<Route path='/books/:genre' element={<BookList />} />
					<Route path='/add-book' element={<Form />} />
					<Route path='/:genre/:id' element={<Book />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
