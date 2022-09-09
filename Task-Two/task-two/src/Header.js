import React from 'react';
import './Header.css';
import {Link} from 'react-scroll';

function Header() {
  return (
    <div className='header'>
        <div className='header_container'>
            <div className='header_logo'>
                <h4 className='logo'>VAANI <br /> <span className='parttwo'> TECHLABS </span></h4>
            </div>
            <div className='header_item'>
                    <ul className='link_item'>
                        <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>
                        <li><Link to="process" spy={true} smooth={true} offset={50} duration={500}>Process</Link></li>
                        <li><Link to="platform" spy={true} smooth={true} offset={50} duration={500}>Platform</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                    <button className='header_button'>Get A Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Header