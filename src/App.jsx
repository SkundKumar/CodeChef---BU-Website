import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { bg } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      
      <div className="relative z-0 bg-primary bg-center ">
              
          <Navbar />
          <Hero />
        
        <About />
        <Experience />
       <Works />
        
        <div className="relative z-0">
          
          <StarsCanvas />
          
        </div>
      </div>
    </BrowserRouter>
  );
}
