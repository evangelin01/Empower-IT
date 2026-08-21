import "../styles/Hero.css";
import backgroundVideo from "../assets/video/background.mp4";
import spartan from "../assets/images/Spartan.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        {/* Spartan Background Logo */}
        <div className="hero-bg-logo">
          <img
            src={spartan}
            alt="Spartan Background"
            className="spartan-logo"
          />
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EMPOWER IT
        </motion.h1>

        {/* Department Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Department of Information Technology
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Empowering Future Innovators
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#about" className="btn primary">
            Explore Department
          </a>

          <a href="#contact" className="btn secondary">
            Contact Us
          </a>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="mouse"></div>
          <span>SCROLL DOWN</span>
          <div className="arrow">⌄</div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;