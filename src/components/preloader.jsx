import React from "react";
import "../styles/Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="logo-container">
        <svg className="logo-svg" viewBox="0 0 100 100">
          <circle
            className="logo-circle"
            cx="50"
            cy="50"
            r="45"
          />
          <path
            className="logo-path"
            d="M30,40 C30,30 70,30 70,40 C70,50 30,50 30,60 C30,70 70,70 70,60"
          />
        </svg>
        <div className="logo-text">Kyo Sushi</div>
      </div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <div className="loading-text">
        <span>C</span>
        <span>a</span>
        <span>r</span>
        <span>i</span>
        <span>c</span>
        <span>a</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
        <span>o</span>
      </div>
    </div>
  );
}

export default Preloader;
