import React, { useState } from "react";
import "../styles/Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("sushi");

  const categories = [
    { id: "sushi", name: "Sushi" },
    { id: "sashimi", name: "Sashimi" },
    { id: "rolls", name: "Rolls" },
    { id: "specials", name: "Speciali" },
    { id: "vegetarian", name: "Vegetariani" },
  ];

  const menuItems = {
    sushi: [
      {
        id: 1,
        name: "Nigiri Salmone",
        description: "Salmone fresco su riso",
        price: "4.50",
        image: "/images/nigiri-salmon.jpg",
        popular: true,
      },
      {
        id: 2,
        name: "Nigiri Tonno",
        description: "Tonno rosso su riso",
        price: "5.00",
        image: "/images/nigiri-tuna.jpg",
        popular: false,
      },
      {
        id: 3,
        name: "Nigiri Gambero",
        description: "Gambero cotto su riso",
        price: "4.80",
        image: "/images/nigiri-shrimp.jpg",
        popular: false,
      },
      {
        id: 4,
        name: "Nigiri Branzino",
        description: "Branzino mediterraneo su riso",
        price: "5.20",
        image: "/images/nigiri-seabass.jpg",
        popular: true,
      },
    ],
    sashimi: [
      {
        id: 5,
        name: "Sashimi Salmone",
        description: "Fette di salmone fresco",
        price: "12.00",
        image: "/images/sashimi-salmon.jpg",
        popular: true,
      },
      {
        id: 6,
        name: "Sashimi Tonno",
        description: "Fette di tonno rosso",
        price: "14.00",
        image: "/images/sashimi-tuna.jpg",
        popular: false,
      },
    ],
    rolls: [
      {
        id: 7,
        name: "California Roll",
        description: "Granchio, avocado, cetriolo",
        price: "10.00",
        image: "/images/california-roll.jpg",
        popular: true,
      },
      {
        id: 8,
        name: "Spicy Tuna Roll",
        description: "Tonno piccante, avocado",
        price: "12.00",
        image: "/images/spicy-tuna-roll.jpg",
        popular: false,
      },
    ],
    specials: [
      {
        id: 9,
        name: "Kyo Fusion Roll",
        description: "Salmone, mascarpone, tartufo",
        price: "16.00",
        image: "/images/fusion-roll.jpg",
        popular: true,
      },
      {
        id: 10,
        name: "Toscana Maki",
        description: "Prosciutto toscano, rucola, parmigiano",
        price: "15.00",
        image: "/images/toscana-maki.jpg",
        popular: true,
      },
    ],
    vegetarian: [
      {
        id: 11,
        name: "Avocado Roll",
        description: "Avocado, cetriolo, carota",
        price: "9.00",
        image: "/images/avocado-roll.jpg",
        popular: false,
      },
      {
        id: 12,
        name: "Vegetarian Futomaki",
        description: "Avocado, asparagi, funghi shiitake",
        price: "10.00",
        image: "/images/vegetarian-futomaki.jpg",
        popular: false,
      },
    ],
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Il Nostro Menu</h2>
          <div className="separator"></div>
          <p>Scopri la nostra selezione di piatti autentici e innovativi</p>
        </div>

        <div
          className="menu-categories"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={activeCategory === category.id ? "active" : ""}
              >
                <button onClick={() => setActiveCategory(category.id)}>
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-items" data-aos="fade-up" data-aos-delay="300">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.id}
              className="menu-item"
              data-aos="zoom-in"
              data-aos-delay={100 * item.id}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                {item.popular && (
                  <span className="popular-badge">Popolare</span>
                )}
              </div>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-item-price">€{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta" data-aos="fade-up" data-aos-delay="400">
          <a
            href="/menu-completo.pdf"
            className="btn btn-secondary"
            target="_blank"
          >
            Scarica Menu Completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
