import React, { useState, useEffect } from "react";
import "../styles/Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Inizializza i filteredItems all'avvio
  useEffect(() => {
    // Carica tutti gli elementi all'inizio
    let allItems = [];
    Object.values(menuData).forEach((categoryItems) => {
      allItems = [...allItems, ...categoryItems];
    });
    setFilteredItems(allItems);
  }, []);

  // Filtra gli elementi quando cambia la categoria
  useEffect(() => {
    filterItems(activeCategory);
  }, [activeCategory]);

  const menuData = {
    sushi: [
      {
        id: 1,
        name: "Nigiri Salmone",
        description: "Salmone fresco su riso",
        price: "4.50",
        image: "images/nigiri-salmon.jpg",
        popular: true,
      },
      {
        id: 2,
        name: "Nigiri Tonno",
        description: "Tonno rosso su riso",
        price: "5.00",
        image: "images/nigiri-tuna.jpg",
        popular: false,
      },
      {
        id: 3,
        name: "Nigiri Gambero",
        description: "Gambero cotto su riso",
        price: "4.80",
        image: "images/nigiri-shrimp.jpg",
        popular: false,
      },
      {
        id: 4,
        name: "Nigiri Branzino",
        description: "Branzino mediterraneo su riso",
        price: "5.20",
        image: "images/nigiri-seabass.jpg",
        popular: true,
      },
    ],
    sashimi: [
      {
        id: 5,
        name: "Sashimi Salmone",
        description: "Fette di salmone fresco",
        price: "12.00",
        image: "images/sashimi-salmon.jpg",
        popular: true,
      },
      {
        id: 6,
        name: "Sashimi Tonno",
        description: "Fette di tonno rosso",
        price: "14.00",
        image: "images/sashimi-tuna.jpg",
        popular: false,
      },
    ],
    rolls: [
      {
        id: 7,
        name: "California Roll",
        description: "Granchio, avocado, cetriolo",
        price: "10.00",
        image: "images/california-roll.jpg",
        popular: true,
      },
      {
        id: 8,
        name: "Spicy Tuna Roll",
        description: "Tonno piccante, avocado",
        price: "12.00",
        image: "images/spicy-tuna-roll.jpg",
        popular: false,
      },
    ],
    specials: [
      {
        id: 9,
        name: "Kyo Fusion Roll",
        description: "Salmone, mascarpone, tartufo",
        price: "16.00",
        image: "images/fusion-roll.jpg",
        popular: true,
      },
      {
        id: 10,
        name: "Toscana Maki",
        description: "Prosciutto toscano, rucola, parmigiano",
        price: "15.00",
        image: "images/toscana-maki.jpg",
        popular: true,
      },
    ],
    vegetarian: [
      {
        id: 11,
        name: "Avocado Roll",
        description: "Avocado, cetriolo, carota",
        price: "9.00",
        image: "images/avocado-roll.jpg",
        popular: false,
      },
      {
        id: 12,
        name: "Vegetarian Futomaki",
        description: "Avocado, asparagi, funghi shiitake",
        price: "10.00",
        image: "images/vegetarian-futomaki.jpg",
        popular: false,
      },
    ],
  };

  const categories = [
    { id: "all", name: "Tutti" },
    { id: "sushi", name: "Sushi" },
    { id: "sashimi", name: "Sashimi" },
    { id: "rolls", name: "Rolls" },
    { id: "specials", name: "Speciali" },
    { id: "vegetarian", name: "Vegetariani" },
  ];

  const filterItems = (category) => {
    setIsAnimating(true);

    setTimeout(() => {
      let filtered = [];

      if (category === "all") {
        // Flatten all categories into a single array
        Object.values(menuData).forEach((categoryItems) => {
          filtered = [...filtered, ...categoryItems];
        });
      } else {
        // Get items from the selected category
        filtered = menuData[category] || [];
      }

      setFilteredItems(filtered);
      setIsAnimating(false);
      
      // Aggiorna le animazioni AOS dopo il cambio di categoria
      if (window.AOS) {
        setTimeout(() => {
          window.AOS.refresh();
        }, 100);
      }
    }, 500);
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Il Nostro Menu</h2>
          <div className="separator"></div>
          <p>Scopri le nostre specialità fusion italo-giapponesi</p>
        </div>

        <div
          className="menu-categories"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          className={`menu-items ${isAnimating ? "animating" : ""}`}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item" data-aos="fade-up">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                {item.popular && <span className="popular-tag">Popolare</span>}
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">€{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="order-btn">
                  <i className="fas fa-plus"></i> Ordina
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta" data-aos="zoom-in" data-aos-delay="400">
          <a
            href="menu-completo.pdf"
            target="_blank"
            className="btn btn-secondary"
          >
            <i className="fas fa-download"></i> Scarica Menu Completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
