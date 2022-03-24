import './App.css';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Book from './components/Book/Book';
import BookList from './components/BookList/BookList';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
	const [isActive, setIsActive] = useState(true);
	const [classState, setClassState] = useState('inactive');

	function handleClick() {
		setIsActive(!isActive);

		if (isActive) {
			setClassState('active');
		} else {
			setClassState('inactive');
		}

		return classState;
	}

	return (
		<>
			<header id='page-top'>
				<div id='button-nav-container'>
					<button id='button-nav' onClick={handleClick}>
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
			<Nav classState={classState} />
			<div>
				<Routes>
					<Route path='/list' element={<BookList />} />
					<Route path='/books/list/:genre' element={<BookList />} />
					<Route path='/add-book' element={<Form />} />
					<Route path='/:genre/:id' element={<Book />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
