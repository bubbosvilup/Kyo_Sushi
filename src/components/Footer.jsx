import React from "react";
import { Link } from "react-scroll";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info" data-aos="fade-up">
              <h3>Kyo Sushi</h3>
              <p>
                Un'esperienza culinaria unica che unisce la tradizione giapponese
                con ingredienti italiani di alta qualità.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="TripAdvisor">
                  <i className="fab fa-tripadvisor"></i>
                </a>
              </div>
            </div>

            <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
              <h4>Link Rapidi</h4>
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={800}>
                    <i className="fas fa-chevron-right"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={800}>
                    <i className="fas fa-chevron-right"></i> Chi Siamo
                  </Link>
                </li>
                <li>
                  <Link to="menu" smooth={true} duration={800}>
                    <i className="fas fa-chevron-right"></i> Menu
                  </Link>
                </li>
                <li>
                  <Link to="gallery" smooth={true} duration={800}>
                    <i className="fas fa-chevron-right"></i> Galleria
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={800}>
                    <i className="fas fa-chevron-right"></i> Contatti
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
              <h4>Contattaci</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Monte Napoleone 12,
                20121 Milano
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +39 02 1234 5678
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@kyosushi.it
              </p>
              <p>
                <i className="fas fa-clock"></i> Lun-Ven: 12:00-15:00, 19:00-23:30
                <br />
                Sab-Dom: 12:00-23:30
              </p>
            </div>

            <div className="footer-newsletter" data-aos="fade-up" data-aos-delay="300">
              <h4>Newsletter</h4>
              <p>Iscriviti per ricevere offerte speciali e novità sul menu</p>
              <form>
                <input type="email" placeholder="La tua email" required />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} <span>Kyo Sushi</span>. Tutti i diritti riservati.
          </div>
          <div className="credits">
            <a href="#">Privacy Policy</a>
            <a href="#">Termini e Condizioni</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="back-to-top">
        <Link to="home" smooth={true} duration={800}>
          <i className="fas fa-chevron-up"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
