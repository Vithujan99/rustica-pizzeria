import React, { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { IngredientsContext } from "../../../../context/IngredientsContext";
import { formatCurrency } from "../../../../utilities/formatCurrency";
import {
  getIngredientstData,
  ingredientsData,
} from "../../../../data/ingredientsData";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

import "./MenuItem.css";
import "./MenuZusatz.css";
import { getTypeById } from "../../../../data/productsData";

export const MenuItem = ({ data }) => {
  const cart = useContext(CartContext);
  const ingredients = useContext(IngredientsContext);
  const [show, setShow] = useState(false);
  function handleZusatzShow() {
    setShow(true);
  }
  function handleZusatzClose() {
    setShow(false);
  }
  const [zusatzName, setZusatzName] = useState();
  function handleZusatzName(name) {
    setZusatzName(name);
  }
  const [text, handleText] = useState("");
  function setText(newText) {
    handleText(newText.target.value);
  }

  const [itemCount, handleItemCount] = useState(1);
  function setItemCount(e) {
    var count = parseInt(e.target.value);
    console.log(count);
    if (count === 0) {
      handleItemCount(1);
    } else if (count > 100) {
      handleItemCount(100);
    } else {
      handleItemCount(count);
    }
  }
  function addItemCount() {
    var count = itemCount;
    if (isNaN(count)) {
      count = 0;
    }
    handleItemCount(count + 1);
  }
  function subItemCount() {
    var count = itemCount;
    if (isNaN(count)) {
      count = 0;
    }
    if (count - 1 <= 0) {
      handleItemCount(1);
    } else {
      handleItemCount(count - 1);
    }
  }

  return (
    <div className="item-card">
      <div
        className="item-card-content"
        onClick={() => {
          if (window.innerWidth <= 800) {
            if (data.zusatz === undefined) {
              cart.addToCart(data.id, [], "", 1);
            } else {
              handleZusatzShow();
              ingredients.handleItemId(data.id);
              handleZusatzName(data.zusatz);
            }
          }
        }}
      >
        <div className="add-icon">
          <BsPlus size={30} />
        </div>
        <div className="item-name">
          {getTypeById(data.id) === "Getränk außer Haus" ? (
            <span></span>
          ) : (
            <span>{("0" + data.id).slice(-3)}.</span>
          )}
          {data.name.toUpperCase()}
          <span className="item-stoff">
            {data.stoff === undefined ? "" : "*" + data.stoff}
          </span>
        </div>

        <div className="item-beschreibung">{data.beschreibung}</div>

        <div className="item-preis">{formatCurrency(data.price)}</div>
      </div>
      <button
        className="item-kaufen"
        onClick={() => {
          if (data.zusatz === undefined) {
            cart.addToCart(data.id, [], "", 1);
          } else {
            handleZusatzShow();
            ingredients.handleItemId(data.id);
            handleZusatzName(data.zusatz);
          }
        }}
      >
        Hinzufügen
      </button>
      <div>
        <div
          className={
            show ? "ask-zusatz-container" : "ask-zusatz-container hide"
          }
        >
          <div
            className="black-background"
            onClick={() => {
              handleZusatzClose();
              console.log(show);
            }}
          />
          <div className="ask-zusatz-content">
            <div className="ask-zusatz-head">
              <div className="ask-zusatz-head-top">
                <div className="ask-zusatz-head-titel">
                  {("0" + data.id).slice(-3)}.{data.name}
                </div>
                <div
                  className="ask-zusatz-close"
                  onClick={() => handleZusatzClose()}
                >
                  X
                </div>
              </div>
              <div className="ask-zusatz-head-header">
                <div className="ask-zusatz-head-header-summe">
                  Summe{" "}
                  <span>
                    {formatCurrency(
                      (isNaN(itemCount) ? 1 : itemCount) *
                        (data.price + ingredients.getTotalCost())
                    )}
                  </span>
                </div>
                <div className="ask-zusatz-head-header-counter">
                  <input
                    className="ask-zusatz-head-header-count"
                    type="number"
                    pattern="[0-9]*"
                    value={itemCount}
                    onChange={(e) => setItemCount(e)}
                  ></input>
                  <div className="ask-zusatz-head-header-arows">
                    <div
                      onClick={() => addItemCount()}
                      className="ask-zusatz-head-header-arow"
                    >
                      <FaAngleUp size={20} />
                    </div>
                    <div
                      onClick={() => subItemCount()}
                      className="ask-zusatz-head-header-arow"
                    >
                      <FaAngleDown size={20} />
                    </div>
                  </div>
                </div>
                <button
                  className="ask-zusatz-head-item-kaufen"
                  onClick={() => {
                    cart.addToCart(
                      data.id,
                      ingredients.ingredientsArray,
                      text,
                      isNaN(itemCount) ? 1 : itemCount
                    );
                    ingredients.removeItem(data.id);
                    handleText("");
                    handleZusatzClose();
                    handleItemCount(1);
                  }}
                >
                  Hinzufügen
                </button>
              </div>
              <div className="ask-zusatz-head-added-items">
                {ingredients.ingredientsArray.length === 0 ? (
                  <>Extras</>
                ) : (
                  <></>
                )}
                {ingredients.ingredientsArray.map((ingredient) => (
                  <div
                    key={ingredient.ingredientId}
                    className="ask-zusatz-head-added-item"
                  >
                    <IoMdRemoveCircle
                      color="#ffc300"
                      size="25px"
                      onClick={() =>
                        ingredients.removeIngredient(
                          data.id,
                          ingredient.ingredientId
                        )
                      }
                      className="ask-zusatz-item-button"
                    />
                    <p className="ask-zusatz-item-name">
                      <b className="ask-zusatz-item-count">
                        {ingredient.quantity}
                      </b>
                      {getIngredientstData(ingredient.ingredientId).name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ask-zusatz-body">
              {zusatzName === "Zusatz2" ? (
                <div className="ask-zusatz-body-section">
                  <label
                    className="ask-zusatz-body-section-name"
                    for="salatIng"
                  >
                    Salat Dressing
                  </label>
                  <br></br>
                  <select
                    className="ask-zusatz-body-section-select"
                    onChange={(event) => {
                      ingredients.addDressingIngredient(
                        data.id,
                        event.target.value
                      );
                    }}
                    required
                    name="salatIngredients"
                    id="salatIng"
                  >
                    {ingredientsData.map((ingredientSection) =>
                      ingredientSection.name === zusatzName ? (
                        ingredientSection.items.map((ingredient) => (
                          <option key={ingredient._id} value={ingredient._id}>
                            {ingredient.name}
                          </option>
                        ))
                      ) : (
                        <></>
                      )
                    )}
                  </select>
                </div>
              ) : (
                <>
                  {ingredientsData.map((ingredientSection) =>
                    ingredientSection.name === zusatzName ? (
                      <div
                        key={ingredientSection.price}
                        className="ask-zusatz-body-section"
                      >
                        <p className="ask-zusatz-body-section-name">
                          Zutaten für: {formatCurrency(ingredientSection.price)}
                        </p>
                        <div className="ask-zusatz-body-section-items">
                          {ingredientSection.items.map((ingredient) => (
                            <div
                              key={ingredient._id}
                              className="ask-zusatz-body-section-item"
                            >
                              <IoMdAddCircle
                                color="#ffc300"
                                size="25px"
                                onClick={() => {
                                  ingredients.addIngredient(
                                    data.id,
                                    ingredient._id
                                  );
                                  console.log(ingredient._id);
                                }}
                                className="ask-zusatz-item-button"
                              />
                              <p className="ask-zusatz-item-name">
                                {ingredient.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
                </>
              )}
              <div className="ask-zusatz-body-section-textfeld-container">
                <label className="ask-zusatz-body-section-textfeld-beschreibung">
                  {" "}
                  Hinweis:{" "}
                  <span>
                    z.B. dunkel backen, ohne Oregano, schneiden, etc. ( Sonstige
                    Extra-Zutaten werden bei der Lieferung/Abholung zusätzlich
                    berechnet).
                  </span>
                </label>

                <textarea
                  className="ask-zusatz-body-section-textfeld"
                  value={text}
                  onChange={(event) => setText(event)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
