import React from 'react'

class SlideBuilder extends React.Component{
	render(){
		let name= 'slideNumber' + this.props.name; 
		return(
			<div className='slide' id={name}>
				<p id='title'>{this.props.title}</p>
				<img alt='' src='https://faxauthority.com/wp-content/uploads/2012/01/black_fax.jpeg' />
				<p id='words'>{this.props.words}</p>
			</div> 
		);
	}
}

export default SlideBuilder