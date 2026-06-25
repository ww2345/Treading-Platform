import React from 'react';
function Hero() {
  return (
    <div className='container p-5 '>
        <div className='row text-center'>
             <img
            src='/image/homeHero.png'
            alt='Trading app illustration'
            className='mb-5'
          />
            <h1 className='mt-5'>Invest Everything</h1>
            <p>Online Trading Platform to invest in stocks , mutual funds</p>
            <button className='mb-5' style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px',marginLeft: 'auto', marginRight: 'auto',width: '200px' }}>Sign Up</button>
        </div>
    </div>
  );
}

export default Hero;