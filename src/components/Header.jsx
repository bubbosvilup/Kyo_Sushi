import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={800}>
            Kyo Sushi
          </Link>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Galleria
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Recensioni
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                onClick={() => setMenuOpen(false)}
              >
                Contatti
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="btn btn-primary"
          >
            Prenota
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
