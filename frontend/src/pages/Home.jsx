import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Designs from '../components/Designs';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Contact from '../components/Contact';
import FeaturesStats from '../components/FeaturesStats';
// import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-[#ffffff]">
      {/* <Navbar /> */}
      <Hero />
      <FeaturesStats/>
      <Services />
      <Designs />
      <Testimonials />
      <Events />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;