import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ classState }) {
	useEffect(() => {
		console.log('hello');
	}, [classState]);

	return (
		<>
			<nav className={`${classState}` + ' nav'} id='nav-genres'>
				<ul className='nav-ul'>
					<Link to='/books'>
						<li className='nav-link'>All Books</li>
					</Link>
					<Link to='/books/:genre'>
						<li className='nav-link'>Fantasy</li>
					</Link>
					<Link to='/books/:genre'>
						<li className='nav-link'>Mystery</li>
					</Link>
					<Link to='/books/:genre'>
						<li className='nav-link'>Romance</li>
					</Link>
					<Link to='/books/:genre'>
						<li className='nav-link'>Fiction</li>
					</Link>
					<Link to='/books/:genre'>
						<li className='nav-link'>Non-Fiction</li>
					</Link>
				</ul>
				<Link to='/add-book'>
					<button id='add-book'>Submit Your Favorite Book</button>
				</Link>
			</nav>
		</>
	);
}

export default Nav;
