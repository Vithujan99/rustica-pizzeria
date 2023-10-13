import React, { useState } from "react";

import HeroImg1 from "../../../asset/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-low.webp";
import HeroImg2 from "../../../asset/vintage-old-rustic-cutlery-dark-low.webp";
import "./Hero.css";

const Hero = () => {
  //change nav when scrolling
  const [imgH1, setImgH] = useState(HeroImg1);
  const [imgH2] = useState(HeroImg2);
  const handleImgH = () => {
    if (window.innerWidth <= 800) {
      setImgH(HeroImg2);
    } else {
      setImgH(HeroImg1);
    }
  };
  window.addEventListener("resize", handleImgH);
  return (
    <div className="hero-container container">
      <div className="hero-spaceholder"></div>
      <div className="hero-content">
        <h1 className="hero-heading">
          Willkommen zu <span>Rustica</span>
        </h1>
        <p className="hero-text">
          Das beste verfügbare Restaurant in Mönchengladbach
        </p>
        <p className="hero-text">
          Buche Online oder rufe
          <span className="spacial-word"> 0216688844</span>
        </p>
      </div>
      <img
        className="hero-image"
        alt="Pizza auf Schwarzen Brett"
        src={window.innerWidth <= 800 ? imgH2 : imgH1}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        srcSet={window.innerWidth <= 800 ? imgH2 + " 1600w" : imgH1 + " 1600w"}
      />
    </div>
  );
};

export default Hero;
