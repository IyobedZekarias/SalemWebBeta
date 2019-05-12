import React from 'react'
import SlideBuilder from './SlideBuilder.js'
import SlideData from '../Data/x-SlideData.js'
import '../Styles/SlidingObjects.css';

class SlidingObjects extends React.Component{
	render(){

		const slides = SlideData.map(slide =>
			<SlideBuilder key={slide.id}
				name={slide.name}
				title={slide.title}
				words={slide.words}
			/>
		);
		return(
			<div className='SlidingObjects'>
				<div className='MenuBar'>
					{slides}
				</div> 
			</div>
		);
	}
}

export default SlidingObjects