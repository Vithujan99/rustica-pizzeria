import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { TimeContext } from "../../context/TimeContext";
import { ShowContext } from "../../context/ShowContext";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

import "./Navbar.css";
import logo from "../../asset/rustica.webp";
import CartBar from "../CartBar/CartBar";

const Navbar = () => {
  const cart = useContext(CartContext);
  const time = useContext(TimeContext);
  const show = useContext(ShowContext);

  //setting active Route
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //change nav when scrolling
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    if (
      window.scrollY >= 90 &&
      window.innerWidth >= 800 &&
      window.innerHeight >= 450
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeScroll);

  //hanldes when clicked on ShoppingCart

  return (
    <div>
      <div className={scroll ? "moving-header-nav" : "header-nav"}>
        <div className="container">
          <div className={scroll ? "moving-nav-bar" : "nav-bar"}>
            <ul className={scroll ? "moving-nav-info" : "nav-info"}>
              <div className="hamburger" onClick={handleClick}>
                {click ? (
                  <FaTimes size={22} style={{ color: "#fff" }} />
                ) : (
                  <FaBars size={22} style={{ color: "#fff" }} />
                )}
              </div>
              <li className="infoa">
                <a className="navbar-tel" href="tel:+49216688844">
                  02166 <b style={{ color: "#ffc300" }}>88844</b>
                </a>
              </li>
              <li className={scroll ? "moving-infob" : "infob"}>
                <Link className={"nav-link info-logo"} to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="logo"
                    width={200}
                    height={55}
                  />
                </Link>
                <span className="info-zeit">
                  {time.isOpen() ? "Offen" : "Geschlossen"}
                </span>
              </li>
              <li className="infoc">
                <div
                  className="shopping-cart-holder"
                  onClick={() => show.handleBarShow()}
                >
                  <FaShoppingCart
                    className="shpping-cart"
                    size={scroll ? 45 : 50}
                    style={{ color: "#fff" }}
                  />
                  <div className="items-in-shop">{cart.getTotalCount()}</div>
                </div>
              </li>
            </ul>

            <div className={scroll ? "moving-divider" : "divider"}></div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="item-a" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="item-b" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="item-c" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/rent"
                >
                  Raum Buchen
                </NavLink>
              </li>
              <li className="item-d" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/about"
                >
                  Über uns
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CartBar></CartBar>
    </div>
  );
};

export default Navbar;
