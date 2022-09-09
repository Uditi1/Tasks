import React from 'react';
import './Hero.css';
import {Link} from 'react-scroll';


function Hero() {
  return (
    <div className='hero'>
        <div className='hero_container'>
            <div className='hero_item'>
                <div className='hero_left'>
                    <div className='hero_leftheading'>
                        <h2>Creativity drives us towards Perfection</h2>
                        <p>We craft astonishing websites, magnificent high geared Apps for Android & IOS & others, innovative
                            CRM that ensure overall growth of your business</p>
                    </div>
                    <div className='hero_button'>
                        <button className='hero_buttonone'>Learn More</button>
                        <button className='hero_buttontwo'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></button>
                    </div>
                </div>

                <div className='hero_right'>
                    <div className='image'>
                        <img src='./images/girl.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero