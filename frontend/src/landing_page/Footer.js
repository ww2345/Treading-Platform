import React from 'react';

function Footer() {
  return (
    <footer className='bg-light py-5 mt-5 '>
      <div className='container '>
        <div className='row g-4 '>
          <div className='col-md-6'>
            <img src='/image/logo.svg' alt='TradingApp logo' width='200' height='30' className='d-inline-block align-text-top' />
            <p className='text-muted mt-3'>Copyright © 2023 TradingApp. All rights reserved.</p>
          </div>

          <div className='col-md-2 '>
            <h6 className='fw-bold mb-3'>Company</h6>
            <ul className='list-unstyled'>
              <li><a href='#home' className='text-decoration-none text-muted'>Home</a></li>
              <li><a href='#about' className='text-decoration-none text-muted'>About</a></li>
              <li><a href='#products' className='text-decoration-none text-muted'>Products</a></li>
            </ul>
          </div>

          <div className='col-md-2'>
            <h6 className='fw-bold mb-3 '>Support</h6>
            <ul className='list-unstyled'>
              <li><a href='#support' className=' text-decoration-none text-muted'>Support</a></li>
              <li><a href='#pricing' className='text-decoration-none text-muted'>Pricing</a></li>
            </ul>
          </div>

          <div className='col-md-2'>
            <h6 className='fw-bold mb-3'>Accounts</h6>
            <ul className='list-unstyled'>
              <li><a href='#open-account' className='text-decoration-none text-muted'>Open Account</a></li>
              <li><a href='#signup' className='text-decoration-none text-muted'>Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;