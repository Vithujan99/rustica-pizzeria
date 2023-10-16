import React, { useEffect, useState } from "react";

import HeroImg2_2048_1365 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_2048_1365.webp";
import HeroImg2_1859_1239 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_1859_1239.webp";
import HeroImg2_1530_1020 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_1530_1020.webp";
import HeroImg2_1100_733 from "../../../asset/homeHero/vintage-old-rustic-cutlery-dark_1100_733.webp";

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
          src={HeroImg2_1100_733}
          srcSet={
            HeroImg2_2048_1365 +
            " 2048w, " +
            HeroImg2_1859_1239 +
            " 1859w, " +
            HeroImg2_1530_1020 +
            " 1530w, " +
            HeroImg2_1100_733 +
            " 1100w, " +
            HeroImg2_300_200 +
            " 300w"
          }
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      ) : (
        <img
          className="hero-image"
          alt="Pizza auf einem Brett"
          src={
            "https://i.ibb.co/qnFh98d/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-1530-1020.webp"
          }
          srcSet={
            "https://i.ibb.co/8cRGHD8/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-2048-1365.webp" +
            " 2048w, " +
            "https://i.ibb.co/6s8vw0b/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-1859-1239.webp" +
            " 1859w, " +
            "https://i.ibb.co/qnFh98d/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-1530-1020.webp" +
            " 1530w, " +
            "https://i.ibb.co/pj6BHCW/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-1100-733.webp" +
            " 1100w, " +
            "https://i.ibb.co/RCC0yhj/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-300-200.webp" +
            " 300w"
          }
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default Hero;
