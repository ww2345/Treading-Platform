import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection'; 
import RightSection from './RightSection'; 
import Universe from './Universe';


function ProductPage(){
    return(
        <div>
           
            <Hero/>
            <LeftSection imageUrl="image/kite.png" productName="kite" productDescription="Our first trading platform with streaming market data " tryDemo="/" learnMore="/" googlePlay="/" appStore="/" />
            <RightSection imgUrl="image/console.png" ProductName="Console" ProductDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  velit cursus nunc, " LearnMore="/"/>
            <LeftSection imageUrl="image/coin.png" productName="Coin" productDescription="Our first trading platform with streaming market data " tryDemo="/" learnMore="/" googlePlay="/" appStore="/" />
            <RightSection ProductName="Kite Connect API " ProductDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " imgUrl="image/kiteconnect.png" LearnMore="/"/>
            <LeftSection imageUrl="image/varsity.png" productName="Varsity Mobile" productDescription="Our first trading platform with streaming market data " tryDemo="/" learnMore="/" googlePlay="/" appStore="/" />


            <Universe/>
        </div>
    )
}

export default ProductPage;