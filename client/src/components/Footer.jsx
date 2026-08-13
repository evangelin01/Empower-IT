import "../styles/Footer.css";
import {
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaEnvelope />
            <a href="mailto:office@ckec.ac.in">
              office@ckec.ac.in
            </a>
          </p>

          <p>
            <FaPhone />
            <a href="tel:+919445008362">
              +91 9445008362
            </a>
          </p>

          <p>
            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com/?q=Christ+The+King+Engineering+College"
              target="_blank"
              rel="noopener noreferrer"
            >
              Christ The King Engineering College
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#faculty">Faculty</a>
          <a href="#students">Students</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/team_tech_official_?igsh=NnlwejUwdzE5dmRs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.ckec.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="College Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 EMPOWER IT | Department of Information Technology
        </p>

        <p>
          Designed & Developed by <strong>Evangelin Kiruba R.</strong>
        </p>
      </div>

      {/* Scroll To Top */}
      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;