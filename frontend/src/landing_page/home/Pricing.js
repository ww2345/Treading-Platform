import React from 'react';
function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h2 className='m-5'>Unbeatable Price</h2>
          <p className=' m-5 text-muted'>We offer competitive pricing for our trading solutions, ensuring that our customers receive the best value for their investment. </p>
        </div>
        <div className='col-2'>

        </div>
        <div className='col-6 text-center'>
          <div className='row  mt-5'>
          <div className='col p-2 border m-4'>
            <h1>0</h1>
            <p className='text-muted'>Commission</p>
          </div>
          <div className='col p-2 border m-4' >
            <h1>20</h1>
            <p className='text-muted'>Per Trade</p>
          </div> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Pricing;