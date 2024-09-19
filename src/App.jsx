import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { About, Experience, Hero, Navbar, Works, StarsCanvas } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="relative z-0">
          <Parallax speed={-14}>
            <div className="hero-section">
              <Navbar />
              <Hero />
            </div>
          </Parallax>

          {/* Other sections */}
          <Parallax speed={20}>
            <div className="about-section">
              <About />
            </div>
          </Parallax>
          
          <Experience />
          <Parallax speed={-10}>
          <Works />
          </Parallax>
          <StarsCanvas />
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}
