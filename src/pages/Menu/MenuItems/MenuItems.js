import React, { useState, useRef, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ShowContext } from "../../../context/ShowContext";
import { getDataByType } from "../../../data/productsData";
import { FaAngleRight, FaAngleLeft, FaShoppingCart } from "react-icons/fa";

import MenuItem from "./MenuItem/MenuItem";
import "./MenuItems.css";

const allButtons = [
  "Pizza",
  "Pizzabrötchen",
  "Salate",
  "Spaghetti",
  "Maccheroni",
  "Tagliatelle",
  "Tortellini",
  "Gnocchi",
  "Rustica Spezial Teil 1",
  "Reisgerichte",
  "Überbackenes",
  "Fitnessküche",
  "Pfannkuchen",
  "Carne",
  "Getränk außer Haus",
  "Dessert",
];
const leftButtons = [
  "Pizza",
  "Pizzabrötchen",
  "Salate",
  "Spaghetti",
  "Maccheroni",
  "Tagliatelle",
  "Tortellini",
  "Gnocchi",
];
const rightButtons = [
  "Rustica Spezial Teil 1",
  "Reisgerichte",
  "Überbackenes",
  "Fitnessküche",
  "Pfannkuchen",
  "Carne",
  "Getränk außer Haus",
  "Dessert",
];
const MenuItems = () => {
  const cart = useContext(CartContext);
  const show = useContext(ShowContext);
  const [titel, handleTitel] = useState("Pizza");
  const [items, handleItems] = useState(getDataByType("Pizza"));
  const setItems = (clickedItem) => {
    //normalerweiße handleItems(getDataByType(clickedItem)); Bis die Daten gefüült sind benutzen wir:
    handleItems(
      getDataByType(clickedItem) === undefined
        ? getDataByType("Pizza")
        : getDataByType(clickedItem)
    );
    handleTitel(clickedItem);
  };

  const [showMenuBar, handleShowMenuBar] = useState(false);
  const openShowMenuBar = () => {
    handleShowMenuBar(true);
  };
  const closeShowMenuBar = () => {
    handleShowMenuBar(false);
  };

  //For Scrolling back menu-items-titel
  const ref = useRef(null);

  const handleRef = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="menu-titel-container">
        <div ref={ref} className="menu-items-titel">
          <div className="white-background"></div>
          <h2 className="item-tiel">{titel}</h2>
        </div>
      </div>
      <div className="items-show-container">
        <div
          className={showMenuBar ? "blackBackground" : "blackBackground hide"}
          onClick={() => closeShowMenuBar()}
        ></div>
        {showMenuBar ? (
          <div
            onClick={() => closeShowMenuBar()}
            className="all-Item-buttons-show close"
          >
            <FaAngleLeft size={50} color="#fc1f1f"></FaAngleLeft>
          </div>
        ) : (
          <div
            onClick={() => openShowMenuBar()}
            className="all-Item-buttons-show open"
          >
            <FaAngleRight size={50} color="#fc1f1f"></FaAngleRight>
          </div>
        )}

        <div
          className={showMenuBar ? "all-Item-buttons" : "all-Item-buttons hide"}
        >
          {allButtons.map((item) => (
            <button
              key={item}
              className={
                titel === item ? "all-item-button active" : "all-item-button"
              }
              onClick={() => {
                setItems(item);
                closeShowMenuBar();
                handleRef();
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="left-Item-buttons">
          {leftButtons.map((item) => (
            <button
              key={item}
              className={
                titel === item ? "item-button item-active" : "item-button"
              }
              onClick={() => {
                setItems(item);
                handleRef();
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="item-holder">
          <div
            className="item-holder-shopping-cart-holder"
            onClick={() => show.handleBarShow()}
          >
            <FaShoppingCart
              className="item-holder-shpping-cart"
              size={50}
              style={{ color: "#ffc300" }}
            />
            <div className="items-in-shop">{cart.getTotalCount()}</div>
          </div>
          {items.map((item) => (
            <div key={item.id} className="menu-item">
              <MenuItem data={item} />
            </div>
          ))}
        </div>
        <div className="right-Item-buttons">
          {rightButtons.map((item) => (
            <button
              key={item}
              className={
                titel === item ? "item-button item-active" : "item-button"
              }
              onClick={() => {
                setItems(item);
                handleRef();
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
