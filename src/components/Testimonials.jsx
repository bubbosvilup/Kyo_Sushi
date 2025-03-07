import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Francesca Bianchi",
      role: "Cliente abituale",
      text: "Il miglior sushi che abbia mai provato a Milano. La fusione con ingredienti italiani è geniale e il servizio è impeccabile. Lo consiglio vivamente!",
      image: "/images/testimonials/testimonial-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Marco Verdi",
      role: "Food Blogger",
      text: "Kyo Sushi è un'autentica esperienza culinaria. I piatti sono presentati con cura e i sapori sono straordinari. Un locale che merita di essere scoperto.",
      image: "/images/testimonials/testimonial-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Alessandro Neri",
      role: "Chef",
      text: "Da professionista del settore, posso dire che la qualità del pesce è eccezionale e la tecnica di preparazione è impeccabile. Un posto che unisce tradizione e innovazione.",
      image: "/images/testimonials/testimonial-3.jpg",
      rating: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Recensioni</h2>
          <div className="separator"></div>
          <p>Cosa dicono i nostri clienti</p>
        </div>

        <div
          className="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <div className="testimonial-content">
                  <div className="quote">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < testimonial.rating ? "filled" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
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
