import React from 'react';
import NavData from '../Data/NavData.js';
import NavLinks from './NavLinks.js';
import '../Styles/Headerstyle.css';


class Header extends React.Component{
	render(){
		const NavLink = NavData.map(link =>
			<NavLinks key={link.id}
				name={link.id}
				text={link.text}
				href={link.href}
				className={link.className}
			/>
		);

		return(
			<div className='Header'>
					<div className='Nav1'>
						<a className='Logo' href='../index.js'> </a>
						<a className='SigninButton' href='./index.js' type="button">
							Get in Touch</a>
					</div>
						{NavLink}
				<div className='Nav2'></div>
			</div> 
		);
	}

}
export default Header