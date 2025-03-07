import React, { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      src: "images/gallery/gallery-1.jpg",
      alt: "Piatto di sushi misto",
      category: "Piatti",
    },
    {
      src: "images/gallery/gallery-2.jpg",
      alt: "Interno del ristorante",
      category: "Locale",
    },
    {
      src: "images/gallery/gallery-3.jpg",
      alt: "Chef al lavoro",
      category: "Cucina",
    },
    {
      src: "images/gallery/gallery-4.jpg",
      alt: "Selezione di sashimi",
      category: "Piatti",
    },
    {
      src: "images/gallery/gallery-5.jpg",
      alt: "Dettaglio bancone sushi",
      category: "Locale",
    },
    {
      src: "images/gallery/gallery-6.jpg",
      alt: "Sakè e piatti giapponesi",
      category: "Bevande",
    },
    {
      src: "images/gallery/gallery-7.jpg",
      alt: "Roll speciali",
      category: "Piatti",
    },
    {
      src: "images/gallery/gallery-8.jpg",
      alt: "Dessert giapponese",
      category: "Dolci",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Galleria</h2>
          <div className="separator"></div>
          <p>Un assaggio visivo dell'esperienza Kyo Sushi</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={100 * index}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span>{image.category}</span>
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="lightbox-image-container">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
              />
              <p className="lightbox-caption">
                {galleryImages[currentImage].alt}
              </p>
            </div>
            <button className="lightbox-next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
