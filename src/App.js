import './App.css';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Book from './components/Book/Book';
import BookList from './components/BookList/BookList';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function App() {
	// const navigate = useNavigate();

	// function handleClick() {
	// 	navigate('/');
	// }
	const iconBook = <FontAwesomeIcon icon={faBook} />;

	return (
		<>
			<header id='page-top'>
				<div id='button-nav-container'>
					<button id='button-nav'>
						<FontAwesomeIcon icon={faBook} className='icon'></FontAwesomeIcon>
					</button>
				</div>

				<div id='title-nav-container'>
					<div id='title-nav'>
						<Link to='/'>
							<h1 id='page-title'>Book Roulette</h1>
						</Link>
					</div>
				</div>
			</header>
			<Nav />
			<div>
				<Routes>
					<Route path='/books' element={<BookList />} />
					<Route path='/books/:genre' element={<BookList />} />
					<Route path='/add-book' element={<Form />} />
					<Route path='/:genre/:id' element={<Book />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
