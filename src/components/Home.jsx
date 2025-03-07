import React from "react";
import { Link } from "react-scroll";
import "../styles/Home.css";

function Home() {
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
              className="btn btn-primary"
            >
              Scopri il Menu
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn btn-secondary"
            >
              Prenota un Tavolo
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
