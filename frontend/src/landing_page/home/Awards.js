import React from 'react';
function Awards() {
  return (
    <div className='container '>
      <div className='row mt-5 mb-5'>
        <div className='col-6'>
          <img src='/image/largestBroker.svg' alt='Award 1' className='img-fluid' />
        </div>
        <div className='col-6'>
          <h1>Largest Stock Broker in India</h1>
          <p>We are proud to be recognized as the largest stock broker in India, serving millions of customers with our reliable and innovative trading platform.</p>
          <div className='row'>
            <div className='col-6 mt-4'>
            <ul>
            <li>Trusted by millions of investors across the country</li>
            <li>Wide range of investment options and services</li>
            <li>Commitment to customer satisfaction and support</li>
            
          </ul>
          </div>

          <div className='col-6 mt-4'>
            <ul>
            <li>Cutting-edge technology and user-friendly interface</li>
            <li>Strong track record of performance and reliability</li>
            <li>Dedicated to empowering investors and helping them achieve their financial goals</li> 
            </ul>
          </div>
          </div>
          <img src='/image/pressLogos.png' alt='Award 2' className='img-fluid mt-3 mb-5'  style={{ width: '60%' }}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;