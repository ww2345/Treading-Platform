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
            <RightSection/>
            <LeftSection imageUrl="image/coin.png" productName="Coin" productDescription="Our first trading platform with streaming market data " tryDemo="/" learnMore="/" googlePlay="/" appStore="/" />
            <RightSection/>
            <LeftSection imageUrl="image/varsity.png" productName="Varsity Mobile" productDescription="Our first trading platform with streaming market data " tryDemo="/" learnMore="/" googlePlay="/" appStore="/" />


            <Universe/>
        </div>
    )
}

export default ProductPage;