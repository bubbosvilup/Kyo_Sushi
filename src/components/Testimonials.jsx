import React, { useState, useEffect, useRef } from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const timeoutRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Marco Bianchi",
      role: "Food Blogger",
      image: "images/testimonials/testimonial-1.jpg",
      text: "Kyo Sushi offre un'esperienza culinaria straordinaria. La fusione tra cucina giapponese e italiana è eseguita con maestria. Ogni piatto è un'opera d'arte, sia visivamente che nel gusto.",
      rating: 5,
    },
    {
      id: 2,
      name: "Giulia Rossi",
      role: "Cliente Abituale",
      image: "images/testimonials/testimonial-2.jpg",
      text: "Frequento Kyo Sushi da quando ha aperto e non sono mai rimasta delusa. Il servizio è impeccabile e l'atmosfera è elegante ma accogliente. I loro roll speciali sono semplicemente deliziosi!",
      rating: 5,
    },
    {
      id: 3,
      name: "Alessandro Verdi",
      role: "Critico Gastronomico",
      image: "images/testimonials/testimonial-3.jpg",
      text: "Un concept innovativo che funziona perfettamente. L'attenzione ai dettagli è evidente in ogni aspetto, dalla presentazione dei piatti all'arredamento. Una delle migliori esperienze di sushi a Milano.",
      rating: 4,
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      
      // Reset animation state after transition completes
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      
      // Reset animation state after transition completes
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      
      // Reset animation state after transition completes
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  useEffect(() => {
    // Auto play functionality
    autoPlayRef.current = () => {
      nextSlide();
    };
    
    const play = () => {
      autoPlayRef.current();
    };
    
    const interval = setInterval(play, 5000);
    
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Cosa Dicono i Clienti</h2>
          <div className="separator"></div>
          <p>Le opinioni di chi ha vissuto l'esperienza Kyo Sushi</p>
        </div>

        <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="200">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <div className="testimonial-content">
                  <div className="testimonial-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-text">
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < testimonial.rating ? "filled" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="testimonial-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
