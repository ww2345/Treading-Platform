import React from "react";

function Team() {
  return (
    <div className="container">
        <div className="row text-center p-5 border-top">
            <h1>People</h1>
        </div>
        <div className='row p-3'>
            <div className='col-6 mb-4 p-5 text-center border-end'>
                <img src='/image/nithinKamath.jpg' alt='Team Member 1' className=' mb-3' style={{ maxWidth: '70%', height: 'auto', borderRadius: '100%' }} />
                <h5>Nithin Kamath</h5>
                <p className='text-muted'>Founder & CEO</p>
            </div>
            <div className='col-6 mb-4 p-5 text-center '>
                <p>Nithin bootstrapped and founded the company in 2015. And He has been leading the company ever since.However He has also been instrumental in shaping the company's vision and strategy.</p>
                <p>He is a serial entrepreneur and has been in the financial services industry for over a decade. And Also a strong believer in the power of technology to transform the financial landscape.</p>
                <p>He is passionate about building products that make investing accessible to everyone. Nithin has been instrumental in driving the company's growth and success.</p>
            </div>
        </div>
    </div>
  );
}

export default Team;