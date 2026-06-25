import React from 'react';
function OpenAccount() {
  return (
    <div className='container p-5'>
        <div className='row text-center p-3 '>
            <h1 className='mt-5 p-3'>Open a Zerodha Account</h1>
            <p className='pb-4'>Modern trading platform for investing in stocks and mutual funds</p>
            <button className='mb-5' style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px',marginLeft: 'auto', marginRight: 'auto',width: '200px' }}>Sign Up Now</button>
        </div>
    </div>
  );
}

export default OpenAccount;