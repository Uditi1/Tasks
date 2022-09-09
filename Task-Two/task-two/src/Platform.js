import React from 'react';
import './Platform.css'

function Platform() {
  return (
    <div className='platform'>
        <div className='platform_container'>
            <div className='platform_heading'>
                <h2><span style={{color: "#9C27B0"}}> Find Us </span>on these platforms</h2>
            </div>
            <div className='platform_item'>
                <div className='platorm_itemrow'>
                    <img src='./images/glassdoor.png' alt=''/>
                    <img src='./images/freelancer.png' alt='' />
                    <img src='./images/unnamed.png' alt=''/>
                    <img src='./images/truelancer.png' alt='' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Platform