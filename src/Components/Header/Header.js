import React from 'react'
import { Link } from 'react-scroll'
import"../Header.css";
const Header = () => {
  return (
    <div className='header'>
    <div className='header-left'>
      <h1>CARA<span>BOUTIQUE</span></h1>
    </div>
    <div className='Header_right'>
     <Link to="Home" smooth={true} duration={500}>
        <h4>Home</h4>
     </Link>
     <div className='Abouts'>
      <a href='/About'>About</a>
      </div>
      <Link to="Collections" smooth={true} duration={500}>
        <h4>Collections</h4>
     </Link>
     <Link to="Contact" smooth={true} duration={500}>
        <h4>Contact</h4>
     </Link>
     <h4 className="header_rightButton"> Join with me</h4>
     </div>
     
    </div>
  )
}

export default Header