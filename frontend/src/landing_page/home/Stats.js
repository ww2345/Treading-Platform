import React from 'react';
function Stats() {
  return (
    <div className='container '>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1>Trust With Confidence</h1>
          <h2 className='mt-4'>Custome first Always</h2>
          <p className='mt-2 text-muted'>We are committed to providing our customers with the best possible experience and support. Our customer-first approach means that we prioritize your needs and satisfaction above all else. We strive to build trust and confidence with our customers by delivering reliable and innovative trading solutions, exceptional customer service, and a user-friendly platform. With us, you can invest with confidence, knowing that we are dedicated to helping you achieve your financial goals.</p>
          <h2 className='mt-4'>No Spam or gimmicks</h2>
          <p className='mt-2 text-muted'>We are committed to providing our customers with a trustworthy and reliable trading experience. We do not engage in any spam or gimmicks, and we prioritize transparency and honesty in all of our interactions with our customers. Our focus is on delivering high-quality trading solutions and exceptional customer service, without resorting to any deceptive or manipulative tactics. With us, you can invest with confidence, knowing that we are dedicated to providing a safe and secure trading environment.</p>
        </div>
        <div className='col-6 mt-5'>
          <img src='/image/ecosystem.png' alt='Stats' className='img-fluid mb-4' />
          <div>
            <a href='/' className='p-3 m-5' style={{textDecoration:"None"}}>Explore Our Products</a>
            <a href='/' className='p-3  m-4' style={{textDecoration:"None"}}>Try Kite Now</a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;