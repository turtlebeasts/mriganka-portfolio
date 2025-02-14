import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center space-y-4  overflow-hidden">
      {/* Particle Background */}
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { speed: 1, direction: "none", outModes: "out" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
            },
          },
        }}
        className="absolute inset-0"
      /> */}

      <ParticleBackground />
      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
      >
        <ReactTyped strings={["Mriganka"]} typeSpeed={40} />
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl text-slate-300 drop-shadow-lg"
      >
        <ReactTyped
          strings={["Frontend Developer", "Tester", "Geek/Enthusiast"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </motion.h4>
    </div>
  );
}
