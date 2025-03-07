import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Chi Siamo</h2>
          <div className="separator"></div>
        </div>

        <div className="about-content">
          <div
            className="about-image"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="image-container">
              <img src="images/chef.jpg" alt="Chef Kyo Sushi" />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <h3>La Nostra Storia</h3>
            <p>
              Fondato nel 2018 dallo chef Hiroshi Tanaka in collaborazione con
              lo chef italiano Marco Rossi, Kyo Sushi nasce dall'idea di unire
              le tradizioni culinarie giapponesi con ingredienti e sapori
              italiani di alta qualità.
            </p>
            <p>
              La nostra missione è offrire un'esperienza gastronomica autentica
              e innovativa, dove ogni piatto è preparato con maestria e
              passione, rispettando le antiche tecniche giapponesi e
              valorizzando i migliori prodotti del territorio italiano.
            </p>

            <div className="features">
              <div className="feature" data-aos="zoom-in" data-aos-delay="400">
                <div className="feature-icon">
                  <i className="fas fa-fish"></i>
                </div>
                <h4>Ingredienti Freschi</h4>
                <p>Pesce fresco selezionato quotidianamente</p>
              </div>

              <div className="feature" data-aos="zoom-in" data-aos-delay="500">
                <div className="feature-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Prodotti Locali</h4>
                <p>Ingredienti italiani di alta qualità</p>
              </div>

              <div className="feature" data-aos="zoom-in" data-aos-delay="600">
                <div className="feature-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h4>Chef Esperti</h4>
                <p>Preparazione tradizionale giapponese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
