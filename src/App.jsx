import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


export default function App() {
  return (
    <BrowserRouter>
      
      <div className="relative z-0 bg-hero-pattern ">
              
          <Navbar />
          <Hero />
        
        <About />
        <Experience />
       
        
        <div className="relative z-0">
          
          <StarsCanvas />
          
        </div>
      </div>
    </BrowserRouter>
  );
}
