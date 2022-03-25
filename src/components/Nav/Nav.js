import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ classState }) {
	return (
		<>
			<nav className={`${classState}` + ' nav'} id='nav-genres'>
				<ul className='nav-ul'>
					<Link to='/books'>
						<li className='nav-link'>All Books</li>
					</Link>
					<Link to='/books/Fantasy'>
						<li className='nav-link'>Fantasy</li>
					</Link>
					<Link to='/books/Mystery'>
						<li className='nav-link'>Mystery</li>
					</Link>
					<Link to='/romanceIthink'>
						<li className='nav-link'>Romance</li>
					</Link>
					<Link to='/books/Education'>
						<li className='nav-link'>Education</li>
					</Link>
					<Link to='/books/Thriller'>
						<li className='nav-link'>Thriller</li>
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
