import React from "react";
import { Link } from "react-scroll";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info" data-aos="fade-up">
            <div className="footer-logo">
              <h3>Kyo Sushi</h3>
              <p>Tradizione giapponese con un tocco italiano</p>
            </div>

            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Monte Napoleone
                12, 20121 Milano
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +39 02 1234 5678
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@kyosushi.it
              </p>
            </div>

            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>

          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h4>Menu Rapido</h4>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={800}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={800}>
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="menu" smooth={true} duration={800}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="gallery" smooth={true} duration={800}>
                  Galleria
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={800}>
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="footer-newsletter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4>Newsletter</h4>
            <p>Iscriviti per ricevere promozioni e novità</p>
            <form>
              <input type="email" placeholder="La tua email" required />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kyo Sushi. Tutti i diritti riservati.</p>
          <p>
            <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Termini e Condizioni</a>
          </p>
          <p className="footer-credit">
            Coded by:{" "}
            <a
              href="https://github.com/bubbosvilup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="credit-link">Bubbo</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
