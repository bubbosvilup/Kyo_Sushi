import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroBackground = document.querySelector(".hero-background");
      const homeText = document.querySelector(".home-text");

      if (heroBackground && homeText) {
        // Effetto parallasse per lo sfondo
        heroBackground.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
        // Effetto di fade per il testo
        homeText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        homeText.style.opacity = 1 - scrollPosition * 0.003;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="home">
      <div className="hero-background"></div>
      <div className="overlay"></div>
      <div className="container home-content">
        <div className="home-text" data-aos="fade-up" data-aos-delay="200">
          <h1>
            <span className="accent">Kyo</span> Sushi
          </h1>
          <p className="tagline">Tradizione giapponese con un tocco italiano</p>
          <p className="description">
            Un'esperienza culinaria unica nel cuore di Milano, dove l'arte del
            sushi incontra ingredienti freschi di alta qualità
          </p>
          <div className="cta-buttons">
            <Link
              to="menu"
              smooth={true}
              duration={800}
              className="btn btn-primary home-btn"
            >
              Il Menu
            </Link>
            <Link
              id="book"
              to="contact"
              smooth={true}
              duration={800}
              className="btn btn-secondary home-btn"
              style={{ color: "#fff" }}
            >
              Prenota
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scorri</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
