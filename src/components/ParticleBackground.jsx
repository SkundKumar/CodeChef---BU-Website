import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

const ParticleBackground = () => {
  console.log("ParticleBackground rendered");
  return <Particles params={particlesConfig} />;
};

export default ParticleBackground;
