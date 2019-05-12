import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import ImageSlider from './Components/ImageSlider.js'
import Wrapper from './Components/Wrapper.js';
import SlidingObjects from './Components/SlidingObjects.js';
import './Styles/index.css';

function Page(){
	return(
		<div className='immovable'>
			<div className='Page'>
				<Header />
					<div className='ImageBackground'>
						<div className='ImageSlidercolor'>
							<ImageSlider />
						</div>
					</div>
				<Wrapper />
				<SlidingObjects />
			</div>
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById('root'));

