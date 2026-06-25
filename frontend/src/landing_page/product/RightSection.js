import React from "react";


function LeftSection({imgUrl , ProductName , ProductDescription , LearnMore}){
    return(
        <div className='container' style={{marginTop : "30px ", marginBlock : "30px"}}>
            <div className="row ">
                <div className="col-4 p-4 mt-4">
                    <h1 className="" style={{marginTop : "60% "}}>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <a href={LearnMore } style={{textDecoration : "none"}}>Learn More</a>

                </div>
                <div className="col-2">
                    
                </div>
                <div className="col-6 mt-5">
                    <img src={imgUrl} alt="Product Img" />
                </div>
            </div>
        </div>
    )
}

export default LeftSection;