export default function Home() {
	return (
		<main id='main-content'>
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
		</main>
	);
}
