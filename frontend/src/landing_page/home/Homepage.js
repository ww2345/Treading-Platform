import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
function Homepage() {
  return (
    <div>
      
      <section id="home">
        <Hero />
      </section>
      <section id="awards">
        <Awards />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="open-account">
        <OpenAccount />
      </section>
      
    </div>
  );
}

export default Homepage;