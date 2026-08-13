import { useState } from "react";
import "../styles/Gallery.css";
import { motion } from "framer-motion";

import placeholder from "../assets/images/placeholder.jpg";

import industrial1 from "../assets/images/industrialvist-1.jpg";
import industrial2 from "../assets/images/industrialvist-2.jpg";
import industrial3 from "../assets/images/industrialvist-3.jpg";
import industrial4 from "../assets/images/industrialvist-4.jpg";
import industrial5 from "../assets/images/industrialvist-5.jpg";
import industrial6 from "../assets/images/industrialvist-6.jpg";
import industrial7 from "../assets/images/industrialvist-7.jpg";

import Workshop1 from "../assets/images/Workshop-1.jpg";
import Workshop2 from "../assets/images/Workshop-2.jpg";
import Workshop3 from "../assets/images/Workshop-3.jpg";
import Workshop4 from "../assets/images/Workshop-4.jpg";
import Workshop5 from "../assets/images/Workshop-5.jpg";
import Workshop6 from "../assets/images/Workshop-6.jpg";
import Workshop7 from "../assets/images/Workshop-7.jpg";


import skillcor1 from "../assets/images/skillcor-1.jpg";
import skillcor2 from "../assets/images/skillcor-2.jpg";
import skillcor3 from "../assets/images/skillcor-3.jpg";
import skillcor4 from "../assets/images/skillcor-4.jpg";
import skillcor5 from "../assets/images/skillcor-5.jpg";
import skillcor6 from "../assets/images/skillcor-6.jpg";

import Inaugu1 from "../assets/images/Inaugu-1.jpg";
import Inaugu2 from "../assets/images/Inaugu-2.jpg";
import Inaugu3 from "../assets/images/Inaugu-3.jpg";
import Inaugu4 from "../assets/images/Inaugu-4.jpg";
import Inaugu5 from "../assets/images/Inaugu-5.jpg";
import Inaugu6 from "../assets/images/Inaugu-6.jpg";
import Inaugu7 from "../assets/images/Inaugu-7.jpg";
import Inaugu8 from "../assets/images/Inaugu-8.jpg";

import onam1 from "../assets/images/onam-1.jpg";
import onam2 from "../assets/images/onam-1.jpg";

import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaArrowLeft,
} from "react-icons/fa";


function Gallery() {

  /* =========================================
     STATES
  ========================================= */

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);


  /* =========================================
     ALBUM DATA
  ========================================= */

  const albums = [
    {
      title: "Culturals",
      cover: placeholder,
      photos: [
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
      ],
    },

    {
      title: "Skill Corner",
      cover: skillcor1,
      photos: [
        skillcor1,
        skillcor2,
        skillcor3,
        skillcor4,
        skillcor5,
        skillcor6,
      ],
    },

    {
      title: "Industrial Visit",
      cover: industrial1,
      photos: [
        industrial1,
        industrial2,
        industrial3,
        industrial4,
        industrial5,
        industrial6,
        industrial7,
      ],
    },

    {
      title: "Birthday Celebration",
      cover: placeholder,
      photos: [
        placeholder,
        placeholder,
        placeholder,
        placeholder,
      ],
    },

    {
      title: "Inauguration",
      cover: Inaugu3,
      photos: [
        Inaugu1,
        Inaugu2,
        Inaugu3,
        Inaugu4,
        Inaugu5,
        Inaugu6,
        Inaugu7,
        Inaugu8,
      ],
    },

    {
      title: "Onam",
      cover: onam1,
      photos: [
        onam1,
        onam2,
      ],
    },

    {
      title: "Pongal",
      cover: placeholder,
      photos: [
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
      ],
    },

    {
      title: "Workshops",
      cover: Workshop7,
      photos: [
        Workshop1,
        Workshop2,
        Workshop3,
        Workshop4,
        Workshop5,
        Workshop6,
        Workshop7,
      ],
    },

    {
      title: "Technical Events",
      cover: placeholder,
      photos: [
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
      ],
    },

 {
    title: "Farewell",
    comingSoon: true,
  },
];
  /* =========================================
     OPEN ALBUM
  ========================================= */

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedPhoto(null);
    setPhotoIndex(0);
  };


  /* =========================================
     CLOSE ALBUM
  ========================================= */

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
    setPhotoIndex(0);
  };


  /* =========================================
     OPEN PHOTO
  ========================================= */

  const openPhoto = (index) => {
    setPhotoIndex(index);
    setSelectedPhoto(selectedAlbum.photos[index]);
  };


  /* =========================================
     CLOSE PHOTO
  ========================================= */

  const closePhoto = () => {
    setSelectedPhoto(null);
  };


  /* =========================================
     PREVIOUS PHOTO
  ========================================= */

  const previousPhoto = () => {

    const newIndex =
      photoIndex === 0
        ? selectedAlbum.photos.length - 1
        : photoIndex - 1;

    setPhotoIndex(newIndex);
    setSelectedPhoto(selectedAlbum.photos[newIndex]);
  };


  /* =========================================
     NEXT PHOTO
  ========================================= */

  const nextPhoto = () => {

    const newIndex =
      photoIndex === selectedAlbum.photos.length - 1
        ? 0
        : photoIndex + 1;

    setPhotoIndex(newIndex);
    setSelectedPhoto(selectedAlbum.photos[newIndex]);
  };


  /* =========================================
     ALBUM VIEW
  ========================================= */

  if (selectedAlbum) {

    return (
      <section
        id="gallery"
        className="gallery album-view"
      >

        {/* BACK BUTTON */}

        <button
          type="button"
          className="gallery-back"
          onClick={closeAlbum}
        >
          <FaArrowLeft />
          Back to Gallery
        </button>


        {/* ALBUM HEADER */}

        <motion.div
          className="gallery-header"
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <h1>{selectedAlbum.title}</h1>

          <p>
            Explore the memorable moments from this event.
          </p>

        </motion.div>


        {/* ALBUM PHOTOS */}

        <div className="album-photo-grid">

          {selectedAlbum.photos.map((photo, index) => (

            <motion.div
              className="album-photo"
              key={index}

              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}

              onClick={() => openPhoto(index)}
            >

              <img
                src={photo}
                alt={`${selectedAlbum.title} ${index + 1}`}
              />

              <div className="album-photo-overlay">

                <FaSearchPlus />

                <span>
                  View Photo
                </span>

              </div>

            </motion.div>

          ))}

        </div>


        {/* FULL SCREEN PHOTO */}

        {selectedPhoto && (

          <div
            className="gallery-lightbox"
            onClick={closePhoto}
          >

            {/* CLOSE */}

            <button
              type="button"
              className="gallery-close"
              onClick={closePhoto}
            >
              <FaTimes />
            </button>


            {/* PREVIOUS */}

            <button
              type="button"
              className="gallery-prev"
              onClick={(e) => {
                e.stopPropagation();
                previousPhoto();
              }}
            >
              <FaChevronLeft />
            </button>


            {/* IMAGE */}

            <motion.img
              className="gallery-lightbox-image"
              src={selectedPhoto}
              alt={selectedAlbum.title}

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

              onClick={(e) => e.stopPropagation()}
            />


            {/* NEXT */}

            <button
              type="button"
              className="gallery-next"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
            >
              <FaChevronRight />
            </button>


            {/* COUNTER */}

            <div className="gallery-counter">

              <strong>
                {selectedAlbum.title}
              </strong>

              <span>
                {photoIndex + 1}
                {" / "}
                {selectedAlbum.photos.length}
              </span>

            </div>

          </div>

        )}

      </section>
    );
  }


  /* =========================================
     MAIN GALLERY
  ========================================= */

  return (

    <section
      id="gallery"
      className="gallery"
    >

      {/* =====================================
          CENTERED HEADER
      ===================================== */}

      <motion.div
        className="gallery-header"

        initial={{
          opacity: 0,
          y: -40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}
      >

        <h1>Gallery</h1>

        <p>
          Explore the memorable moments,
          celebrations, events and activities
          of the Department of Information Technology.
        </p>

      </motion.div>


      {/* =====================================
          5 × 2 ALBUM GRID
      ===================================== */}

      <div className="gallery-container">

        {albums.map((album, index) => (

          <motion.div
            className="gallery-album"
            key={index}

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            whileHover={{
              y: -6,
            }}

            onClick={() => {
  if (!album.comingSoon) {
    openAlbum(album);
  }
}}
          >

            {album.comingSoon ? (
               <div className="coming-soon-card">
                <h2>{album.title}</h2>
                <span>Coming Soon</span>
                </div>
) : (
  <>
    {/* COVER IMAGE */}

    <img
      src={album.cover}
      alt={album.title}
    />

    {/* DARK GRADIENT */}

    <div className="gallery-image-gradient"></div>

    {/* HOVER OVERLAY */}

    <div className="gallery-album-overlay">

      <FaSearchPlus />

      <span>
        Open Album
      </span>

    </div>

    {/* ALBUM TITLE */}

    <div className="gallery-album-title">

      <h2>
        {album.title}
      </h2>

      <span>
        {album.photos.length} Photos
      </span>

    </div>
  </>
)}

          </motion.div>

        ))}

      </div>

    </section>
  );
}



export default Gallery;