import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<div>
			<nav>
				<ul>
					<Link to='/books'>All Books</Link>
					<Link to='/books/:genre'>Fantasy</Link>
					<Link to='/books/:genre'>Mystery</Link>
					<Link to='/books/:genre'>Romance</Link>
					<Link to='/books/:genre'>Fiction</Link>
					<Link to='/books/:genre'>Non-Fiction</Link>
				</ul>
				<Link to='/add-book'>
					<button>Submit Your Favorite Book</button>
				</Link>
			</nav>
		</div>
	);
}

export default Nav;
