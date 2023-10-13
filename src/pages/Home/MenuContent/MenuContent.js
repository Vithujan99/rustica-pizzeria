import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../Menu/MenuItems/MenuItem/MenuItem";
import { getDataByType } from "../../../data/productsData";
import PizzaImg from "../../../asset/homePage/top-view-italian-pizza-sticker-white-background-removebg-low.webp";
import SpaghettiImg from "../../../asset/homePage/top-view-paghetti-carbonara-dish-sticker-white-removebg-low.webp";
import ReisgerichteImg from "../../../asset/homePage/detailed-gopalkala-illustration-removebg-low.webp";

import "./MenuContent.css";

const MenuContent = () => {
  const [randomPizza] = useState(
    Math.floor(Math.random() * getDataByType("Pizza").length)
  );
  const [randomSpaghetti] = useState(
    Math.floor(Math.random() * getDataByType("Spaghetti").length)
  );
  const [randomReisgerichte] = useState(
    Math.floor(Math.random() * getDataByType("Reisgerichte").length)
  );
  return (
    <div className="home-menu">
      <div className="home-menu-titel-holder">
        <Link className="home-menu-menu-titel" to="/menu">
          Menu
        </Link>
      </div>
      <div className="home-cards-holder">
        <div className="home-item">
          <div className="middle-circle" />
          <img
            className="pizza-img"
            alt="Pizza"
            src={PizzaImg}
            loading="lazy"
            sizes="200px"
            srcSet={PizzaImg + " 200w"}
          ></img>
          <MenuItem
            key={getDataByType("Pizza")[randomPizza].id}
            data={getDataByType("Pizza")[randomPizza]}
          />
        </div>
        <div className="home-item">
          <div className="middle-circle" />
          <img
            className="pizza-img"
            alt="Spaghetti"
            src={SpaghettiImg}
            loading="lazy"
            sizes="200px"
            srcSet={SpaghettiImg + " 200w"}
          ></img>
          <MenuItem
            key={getDataByType("Spaghetti")[randomSpaghetti].id}
            data={getDataByType("Spaghetti")[randomSpaghetti]}
          />
        </div>
        <div className="home-item">
          <div className="middle-circle" />
          <img
            className="pizza-img reis-img"
            alt="Reisgericht"
            src={ReisgerichteImg}
            loading="lazy"
            sizes="200px"
            srcSet={ReisgerichteImg + " 200w"}
          ></img>
          <MenuItem
            key={getDataByType("Reisgerichte")[randomReisgerichte].id}
            data={getDataByType("Reisgerichte")[randomReisgerichte]}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
