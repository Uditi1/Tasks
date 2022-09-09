import React from 'react';
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='about_container'>
            <div className='about_heading'>
                <h2>Introduction About Corporate <span style={{color: "#9C27B0"}}> Business </span></h2>
            </div>
            <div className='about_para'>
                <p>Do you want to step up your business 
                    digitally? We aid in providing website 
                    design, app development, and custom CRM 
                    development services from the top experts 
                    for both startup companies as well 
                    as established companies doing 
                    business offline</p>
            </div>
            <div className='about_extra'>
                <div className='extra'>
                    <h2>5</h2>
                    <h4>YEARS OF <br />EXPERIENCE</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About