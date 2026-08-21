import { useState } from "react";
import "../styles/Students.css";
import placeholder from "../assets/images/placeholder.jpg";

import industrialMain from "../assets/images/industrial-main.jpg";
import industrial1 from "../assets/images/industrial-1.jpg";
import industrial2 from "../assets/images/industrial-2.jpg";
import industrial3 from "../assets/images/industrial-3.jpg";
import industrial4 from "../assets/images/industrial-4.jpg";
import industrial5 from "../assets/images/industrial-5.jpg";

import Skilldep1 from "../assets/images/Skilldep-1.jpg";
import Skilldep2 from "../assets/images/Skilldep-2.jpg";
import Skilldep3 from "../assets/images/Skilldep-3.jpg";
import Skilldep4 from "../assets/images/Skilldep-4.jpg";

import techact1 from "../assets/images/techact-1.jpg";
import techact2 from "../assets/images/techact-2.jpg";

import innov1 from "../assets/images/innov-1.jpg";
import innov2 from "../assets/images/innov-2.jpg";
import innov3 from "../assets/images/innov-3.jpg";

import cocurri1 from "../assets/images/cocurri-1.jpg";
import cocurri2 from "../assets/images/cocurri-2.jpg";
import cocurri3 from "../assets/images/cocurri-3.jpg";
import cocurri4 from "../assets/images/cocurri-4.jpg";

import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
  FaIndustry,
  FaUsers,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
} from "react-icons/fa";


const activities = [
  {
    title: "Technical Activities",
    icon: <FaLaptopCode />,
    image: techact1,

    description:
      "Students actively participate in technical events to enhance their practical knowledge and problem-solving skills.",

    details: [
      "INNOVOX National Level Symposium",
      "Paper Presentation",
      "Web Designing",
      "Quick Bug Hunt",
      "Reverse Coding",
      "Treasure Hunt",
    ],

    gallery: [
      techact1,
      techact2,
    ],

    highlights: [
      "National Level Symposium",
      "Technical Competitions",
      "Hands-on Learning",
    ],
  },


  {
    title: "Innovation & Entrepreneurship",
    icon: <FaLightbulb />,
    image: innov1,

    description:
      "The department encourages innovative thinking through startup and entrepreneurship activities.",

    details: [
      "Startup Awareness Programme",
      "Niral Thiruvizha 3.0",
      "AICTE YUKTI",
      "Ideathons",
      "Entrepreneurship Development",
    ],

    gallery: [
      innov1,
      innov2,
      innov3,
    ],

    highlights: [
      "Innovation Culture",
      "Startup Ecosystem",
      "Creative Thinking",
    ],
  },


  {
    title: "Skill Development",
    icon: <FaGraduationCap />,
    image: Skilldep1,

    description:
      "Students improve their technical expertise through various workshops and training programmes.",

    details: [
      "Python",
      "UI / UX Design",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "DevOps",
      "Advanced SQL",
    ],

    gallery: [
      Skilldep1,
      Skilldep2,
      Skilldep3,
      Skilldep4,
    ],

    highlights: [
      "Industry Skills",
      "Hands-on Workshops",
      "Career Readiness",
    ],
  },

{
  title: "Industrial Exposure",
  icon: <FaIndustry />,
  image: industrialMain,

  description:
    "Students gain industry experience through visits, internships, and professional training.",

  details: [
    "Industrial Visits",
    "AICTE Idea Lab",
    "Internships",
    "Industry Training",
    "Software Job Simulation",
  ],

  gallery: [
    industrial1,
    industrial2,
    industrial3,
    industrial4,
    industrial5,
  ],

  highlights: [
    "Real Industry Experience",
    "Professional Networking",
    "Practical Learning",
  ],
},


  {
    title: "Co-Curricular Activities",
    icon: <FaUsers />,
    image: cocurri4,

    description:
      "The department organizes cultural and social activities that encourage creativity and teamwork.",

    details: [
      "Photography",
      "Insta Flicks",
      "E-Games",
      "Women's Day",
      "Yoga Day",
      "Blood Donation Camp",
    ],

    gallery: [
      cocurri1,
      cocurri2,
      cocurri3,
      cocurri4,
    ],

    highlights: [
      "Leadership",
      "Creativity",
      "Teamwork",
    ],
  },
];


function Students() {

  const [openCard, setOpenCard] = useState(null);

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);


  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };


  // Open image
  const openImage = (images, index) => {
    setSelectedImages(images);
    setCurrentImage(index);
    setSelectedImage(images[index]);
  };


  // Close image
  const closeImage = () => {
    setSelectedImage(null);
    setSelectedImages([]);
    setCurrentImage(0);
  };


  // Previous image
  const previousImage = () => {
    const newIndex =
      currentImage === 0
        ? selectedImages.length - 1
        : currentImage - 1;

    setCurrentImage(newIndex);
    setSelectedImage(selectedImages[newIndex]);
  };


  // Next image
  const nextImage = () => {
    const newIndex =
      currentImage === selectedImages.length - 1
        ? 0
        : currentImage + 1;

    setCurrentImage(newIndex);
    setSelectedImage(selectedImages[newIndex]);
  };


  return (
    <section id="students" className="students">

      {/* =========================
          HEADER
      ========================= */}

      <motion.div
        className="students-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >

        <h1>Student Activities</h1>

        <p>
          The Department of Information Technology provides students with
          opportunities to develop technical expertise, innovation,
          entrepreneurship, leadership, and professional skills through
          various academic and co-curricular activities.
        </p>

      </motion.div>


      {/* =========================
          ACTIVITIES GRID
      ========================= */}

      <div className="students-grid">

        {activities.map((activity, index) => (

          <motion.div
            className="student-card"
            key={index}

            initial={{ opacity: 0, y: 50 }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}

            viewport={{ once: true }}

            whileHover={{ y: -10 }}
          >

            {/* =========================
                MAIN IMAGE
            ========================= */}

            <div
              className="main-image-wrapper"
              onClick={() =>
                openImage(
                  [activity.image, ...activity.gallery],
                  0
                )
              }
            >

              <img
                src={activity.image}
                alt={activity.title}
              />

              <div className="image-overlay">

                <FaSearchPlus />

                <span>Click to View</span>

              </div>

            </div>


            {/* =========================
                CARD CONTENT
            ========================= */}

            <div className="card-content">

              <div className="card-icon">
                {activity.icon}
              </div>


              <h2>{activity.title}</h2>


              <p>
                {activity.description}
              </p>


              <button
                onClick={() => toggleCard(index)}
              >
                {openCard === index
                  ? "▲ Show Less"
                  : "▼ Explore Activities"}
              </button>


              {/* =========================
                  EXPANDED CONTENT
              ========================= */}

              {openCard === index && (

                <motion.div
                  className="expanded-content"

                  initial={{
                    opacity: 0,
                    height: 0,
                  }}

                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}

                  transition={{
                    duration: 0.4,
                  }}
                >

                  {/* Activities */}

                  <h3>
                    Activities
                  </h3>


                  <ul>

                    {activity.details.map(
                      (item, i) => (

                        <li key={i}>
                          {item}
                        </li>

                      )
                    )}

                  </ul>


                  {/* Gallery */}

                  <h3>
                    📸 Experience Gallery
                  </h3>


                  <div className="gallery">

                    {activity.gallery.map(
                      (img, i) => (

                        <div
                          className="gallery-item"
                          key={i}
                          onClick={() =>
                            openImage(
                              [
                                activity.image,
                                ...activity.gallery,
                              ],
                              i + 1
                            )
                          }
                        >

                          <img
                            src={img}
                            alt={`${activity.title} ${i + 1}`}
                          />

                          <div className="gallery-overlay">
                            <FaSearchPlus />
                          </div>

                        </div>

                      )
                    )}

                  </div>


                  {/* Highlights */}

                  <h3>
                    Highlights
                  </h3>


                  <ul>

                    {activity.highlights.map(
                      (item, i) => (

                        <li key={i}>
                          {item}
                        </li>

                      )
                    )}

                  </ul>

                </motion.div>

              )}

            </div>

          </motion.div>

        ))}

      </div>


      {/* =================================================
          IMAGE LIGHTBOX
      ================================================= */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={closeImage}
        >

          {/* Close */}

          <button
            className="lightbox-close"
            onClick={closeImage}
          >
            <FaTimes />
          </button>


          {/* Previous */}

          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
          >
            <FaChevronLeft />
          </button>


          {/* Large Image */}

          <motion.img
            className="lightbox-image"

            src={selectedImage}

            alt="Full View"

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.3,
            }}

            onClick={(e) =>
              e.stopPropagation()
            }
          />


          {/* Next */}

          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaChevronRight />
          </button>


          {/* Counter */}

          <div className="lightbox-counter">
            {currentImage + 1} / {selectedImages.length}
          </div>

        </div>

      )}

    </section>
  );
}


export default Students;