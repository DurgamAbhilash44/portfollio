import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim"; // Import slim version

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // Initialize slim engine
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0d47a1", // Customize background color
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff", // Customize particles color
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6, // Customize speed
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
