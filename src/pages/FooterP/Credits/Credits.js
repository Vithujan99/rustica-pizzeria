import React from "react";
import "./Credits.css";

import HeroImg1 from "../../../asset/credits/pizza-time-tasty-homemade-traditional-pizza-italian-recipe.jpg";
import HeroImg2 from "../../../asset/credits/vintage-old-rustic-cutlery-dark.jpg";
import MenuImg from "../../../asset/credits/269.jpg";
import HomeMenuPizza from "../../../asset/credits/m76p_ek5o_210608.jpg";
import HomeMenuCarbonara from "../../../asset/credits/obia_0mpt_210608.jpg";
import HomeMenuRice from "../../../asset/credits/5570089.jpg";
import FoodIcons from "../../../asset/credits/OPQ88B0.jpg";

const Credits = () => {
  return (
    <div className="credits-page">
      <h1 className="credits-p-titel">Credits</h1>
      <div className="credits-p-content">
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="pizza on a grey board"
            src={HeroImg1}
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-photo/pizza-time-tasty-homemade-traditional-pizza-italian-recipe_10213104.htm#position=2">
              Image by Racool_studio
            </a>
            <p>on Freepik</p>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="forks on black board"
            src={HeroImg2}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_6216945.htm#position=4">
              Image by valeria_aksakova
            </a>
            <p>on Freepik</p>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="drawn pizza ingredients"
            src={MenuImg}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-vector/seamless-pizza-ingredients_1389751.htm#position=1">
              Image by sergey_kandakov
            </a>
            <p>on Freepik</p>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="top view pizza sticker on white background"
            src={HomeMenuPizza}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-vector/top-view-italian-pizza-sticker-white-background_18240773.htm#position=3">
              Image by brgfx
            </a>
            <p>on Freepik</p>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="top view paghetti carbonara sticker on white background"
            src={HomeMenuCarbonara}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-vector/top-view-paghetti-carbonara-dish-sticker-white_16511257.htm#position=1">
              Image by brgfx
            </a>
            <p>on Freepik</p>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="detailed gopalkala illustration"
            src={HomeMenuRice}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-vector/detailed-gopalkala-illustration_15272950.htm#position=2">
              Image by Freepik
            </a>
          </div>
        </div>
        <div className="credits-p-section">
          <img
            className="credits-p-image"
            alt="food icons collection"
            src={FoodIcons}
            rel="preload"
            loading="eager"
          ></img>
          <div className="credits-p-credit">
            <a href="https://www.freepik.com/free-vector/food-icons-collection_1121514.htm#position=1">
              Image by alvaro_cabrera
            </a>
            <p>on Freepik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
