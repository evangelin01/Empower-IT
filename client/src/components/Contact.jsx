import "../styles/Contact.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Heading */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Feel free to contact the
          Department of Information Technology for any queries,
          collaborations, or admissions-related information.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="info-box">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Address</h3>

              <p>
                Christ The King Engineering College
                <br />
                Cecilia Gardens
                <br />
                158/3, Onnipalayam Road,
                <br />
                Karamadai - 641104
                <br />
                Coimbatore, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>

              <a href="mailto:empowerit2023@gmail.com">
                empowerit2023@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>

              <a href="tel:+919943169656">
                +91 9943169656
              </a>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FaClock />
            </div>

            <div>
              <h3>Office Hours</h3>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 4:30 PM
              </p>
            </div>
          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2>Send a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

      {/* Google Map */}

      <motion.div
        className="map-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2>Find Us</h2>

        <div className="map-container">

          <iframe
            title="Christ The King Engineering College"
            src="https://www.google.com/maps?q=Christ+The+King+Engineering+College+Karamadai&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;