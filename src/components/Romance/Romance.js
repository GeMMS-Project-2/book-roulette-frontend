import React from 'react';
import ReactPlayer from 'react-player';
export default function Romance() {
	return (
		<div className='romance-container'>
			<ReactPlayer
				url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				className='react-player'
				playing
				width='100%'
				height='100%'
				volume={0.1}
			/>
		</div>
	);
}
