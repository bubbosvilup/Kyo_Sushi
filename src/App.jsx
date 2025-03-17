import React, { useEffect, useState } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "aos/dist/aos.css";
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configurazione migliorata per AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });

    // Simula il caricamento delle risorse
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Reinizializza AOS quando la finestra viene ridimensionata
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
