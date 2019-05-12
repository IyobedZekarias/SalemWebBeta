import React from 'react'
import '../Styles/Sliderstyle.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ImageSlider extends React.Component{
	

	render(){
		return(
			<div>
			<Carousel className='ImageSlider' showArrows={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={700}>
				<div>
					<img alt='' className="mySlides" src="https://btcentral.tile.com.au/static/Tiles/Regular/1024/97690L.png" />
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img alt='' className="mySlides" src="https://btcentral.tile.com.au/static/Tiles/Regular/1024/97690L.png" />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img alt='' className="mySlides" src="https://btcentral.tile.com.au/static/Tiles/Regular/1024/97690L.png" />
					<p className="legend">Legend 3</p>
				</div>
				<div>
					<img alt='' className="mySlides" src="https://btcentral.tile.com.au/static/Tiles/Regular/1024/97690L.png" />
					<p className="legend">Legend 4</p>
				</div>
			</Carousel>
			</div>

		);
	}
}

export default ImageSlider