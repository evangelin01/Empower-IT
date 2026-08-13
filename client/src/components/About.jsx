import "../styles/About.css";
import aboutImage from "../assets/images/about.jpg";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Programming",
      text: "Develop strong coding skills using modern programming languages and technologies.",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      text: "Explore AI, Machine Learning, and Data Science to solve real-world problems.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      text: "Learn cloud platforms, virtualization, and scalable application deployment.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      text: "Gain knowledge in ethical hacking, network security, and digital protection.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Web & Mobile Development",
      text: "Build responsive websites and mobile applications using modern frameworks.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      text: "Understand database design, SQL, and enterprise data management.",
    },
  ];

  return (
    <section className="about" id="about">
      {/* Heading */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>About B.Tech Information Technology</h1>

        <p>
          The Department of Information Technology is committed to providing
          quality education, fostering innovation, and preparing students to
          become skilled professionals capable of meeting the ever-changing
          demands of the IT industry.
        </p>
      </motion.div>

      {/* Overview */}
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Department" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Department Overview</h2>

          <p>
            The Department of Information Technology offers a dynamic learning
            environment that blends academic excellence with practical
            experience. Through expert faculty, modern laboratories, industry
            interaction, research activities, and technical events, students
            develop strong analytical, technical, and leadership skills.
          </p>

          <p>
            We encourage students to participate in workshops, hackathons,
            internships, industrial visits, research projects, and innovation
            programmes to prepare them for successful careers in the IT
            industry.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission">
        <motion.div
          className="vm-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Vision</h2>

          <p>
            To become a centre of excellence in Information Technology by
            producing innovative, ethical, and globally competent IT
            professionals.
          </p>
        </motion.div>

        <motion.div
          className="vm-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Mission</h2>

          <p>
            To provide quality education, encourage research and innovation,
            promote entrepreneurship, and prepare students with technical,
            professional, and leadership skills for lifelong learning.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <motion.h2
        className="feature-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Information Technology?
      </motion.h2>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;