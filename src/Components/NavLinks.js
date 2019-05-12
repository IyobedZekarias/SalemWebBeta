import React from 'react'
import '../Styles/Headerstyle.css';

function NavLinks(i){
	let name = 'link' + i.name;
	
	return(
		<a className={i.className} id={name} href={i.href}>{i.text}</a>
	);
}


export default NavLinks