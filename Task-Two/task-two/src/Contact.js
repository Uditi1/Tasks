import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact' style={{backgroundImage: 'url(./images/process.png)'}}>
        <div className='cover'>
            <div className='contact_container' >
                <div className='contact_listone'>
                    <p><span style={{fontWeight: 'bold'}}>Quick Links </span></p>
                    <p>Web Design</p>
                    <p>IOS App Deelopment</p>
                    <p>Custom CRM Development</p>
                    <p>Flutter App Development</p>
                    <p>Graphic Designing</p>
                </div>

                <div className='contact_listtwo'>
                    <p><span style={{fontWeight: 'bold'}}>Other Pages </span></p>
                    <p>Careers With Us</p>
                    <p>business with us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Return Policy</p>
                </div>

                <div className='contact_listthree'>
                    <p><span style={{fontWeight: 'bold'}}>Know where to find us? Let's 
                        take a look and get in touch !</span></p>
                    <p>C-99 / 90 sector 11 Rohini New Delhi</p>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact