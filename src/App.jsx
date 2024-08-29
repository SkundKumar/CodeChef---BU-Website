import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ParticleBackground from "./components/particleBackground";

export default function App() {
  return (
    <BrowserRouter>
      
      <div className="relative z-0 bg-hero-pattern ">
      <ParticleBackground className="z-10 w-screen h-screen bg-red-700" />
        
          <Navbar />
          <Hero />
        
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          
        </div>
      </div>
    </BrowserRouter>
  );
}
