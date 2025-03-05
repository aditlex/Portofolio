import { useEffect } from "react";
import "particles.js"; // Import Particles.js

export default function ParticlesBackground() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: false } },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: { value: 0.7, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 0.5,
            angle: 90,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
          },
          line_linked: { enable: false },
        },
      });
    }
  }, []);

  return <div id="particles-js" className="absolute inset-0 z-0" />;
}
