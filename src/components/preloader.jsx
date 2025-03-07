import React from "react";
import "../styles/Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="logo-container">
        <svg className="logo-svg" viewBox="0 0 100 100">
          <circle className="logo-circle" cx="50" cy="50" r="40" />
          <path className="logo-path" d="M30,50 Q50,30 70,50 T90,50" />
        </svg>
        <h2 className="logo-text">Kyo Sushi</h2>
      </div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
}

export default Preloader;
