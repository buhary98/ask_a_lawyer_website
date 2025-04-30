import React, { useState } from "react";
// import "./ProFeatures.css";

const ProFeatures = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`pro-features ${isActive ? "active" : ""}`}>
      <button className="get-pro" onClick={() => setIsActive(!isActive)}>
        Get Pro
      </button>
      <ul>
        <li className="big-title">Pro Version Available on Themeforest</li>
        <li className="title">Pro Version Features</li>
        <li>2+ premade home pages</li>
        <li>20+ HTML pages</li>
        <li>Color Plate With 12+ Colors</li>
        <li>Sticky Header / Sticky Filters</li>
        <li>Working Contact Form With Google Map</li>
      </ul>
      <div className="button">
        <a
          href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910"
          target="_blank"
          rel="noopener noreferrer"
          className="bton"
        >
          Pro Version Demo
        </a>
        <a
          href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
          target="_blank"
          rel="noopener noreferrer"
          className="bton"
        >
          Buy Pro Version
        </a>
      </div>
    </div>
  );
};

export default ProFeatures;
