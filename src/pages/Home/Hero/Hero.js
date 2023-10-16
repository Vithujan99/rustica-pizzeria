import React, { useEffect, useState } from "react";

import HeroImg1_2048_1365 from "../../../asset/homeHero/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_2048_1365.webp";
import HeroImg1_1859_1239 from "../../../asset/homeHero/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_1859_1239.webp";
import HeroImg1_1530_1020 from "../../../asset/homeHero/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_1530_1020.webp";
import HeroImg2_1530_1020 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_1530_1020.webp";
import HeroImg1_1100_733 from "../../../asset/homeHero/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_1100_733.webp";
import HeroImg2_1100_733 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_1100_733.webp";
import HeroImg1_300_200 from "../../../asset/homeHero/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_300_200.webp";
import HeroImg2_300_200 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_300_200.webp";

import "./Hero.css";

const Hero = () => {
  const [size, setSize] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setSize(true);
    } else {
      setSize(false);
    }
    const interval = setInterval(() => {
      if (window.innerWidth <= 800) {
        setSize(true);
      } else {
        setSize(false);
      }
    }, 1000);
    return () => {
      clearInterval(interval); // Clean up the interval
    };
  }, []);

  //change nav when scrolling
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
      {size ? (
        <img
          className="hero-image"
          alt="Pizza auf einem Brett"
          src={HeroImg2_1530_1020}
          srcSet={
            HeroImg2_1530_1020 +
            " 1530w, " +
            HeroImg2_1100_733 +
            " 1100w, " +
            HeroImg2_300_200 +
            " 300w"
          }
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          rel="preload"
          loading="eager"
        />
      ) : (
        <img
          className="hero-image"
          alt="Pizza auf einem Brett"
          src={HeroImg1_1530_1020}
          srcSet={
            HeroImg1_2048_1365 +
            " 2048w, " +
            HeroImg1_1859_1239 +
            " 1859w, " +
            HeroImg1_1530_1020 +
            " 1530w, " +
            HeroImg1_1100_733 +
            " 1100w, " +
            HeroImg1_300_200 +
            " 300w"
          }
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          rel="preload"
          loading="eager"
        />
      )}
    </div>
  );
};

export default Hero;
