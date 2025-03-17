import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
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
                onClick={closeMenu}
                className={scrollPosition < 300 ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className={scrollPosition >= 300 && scrollPosition < 1000 ? "active" : ""}
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className={scrollPosition >= 1000 && scrollPosition < 1800 ? "active" : ""}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className={scrollPosition >= 1800 && scrollPosition < 2600 ? "active" : ""}
              >
                Galleria
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className={scrollPosition >= 2600 && scrollPosition < 3200 ? "active" : ""}
              >
                Recensioni
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className={scrollPosition >= 3200 ? "active" : ""}
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
