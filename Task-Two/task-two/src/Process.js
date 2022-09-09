import React from 'react';
import './Process.css';

function Process() {
  return (
    <div className='process' style={{backgroundImage: 'url(./images/process.png)'}}>
        <div className='cover'>
        <div className='process_container'>
            <div className='process_top'>
                <h2>Our Flowless Process</h2>
                <p>Achieve your business goal with our extensive 
                    yet specialized spectrum of workflow 
                    processes that we follow across the 
                    industry to meet your business requirements 
                    and empower global businesses.</p>
            </div>
            <div className='process_bottom'>
                <div className='process_itemone'>
                <i class="fa-light fa-file-magnifying-glass"></i>
                    <h3>Research</h3>
                </div>

                <div className='process_itemone'>
                    <i class="fa-light fa-atom-simple"></i>
                    <h3>Develop</h3>
                </div>

                <div className='process_itemone'>
                    <i class="fa-light fa-gears"></i>
                    <h3>Testing</h3>
                </div>

                <div className='process_itemone'>
                    <i class="fa-light fa-badge-check"></i>
                    <h3>Launch</h3>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Process