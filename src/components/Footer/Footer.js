import React from "react";
import { NavLink } from "react-router-dom";
import { BsPaypal, BsCash } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <small className="footer-copyright">&copy; Copyright 2023, Vidro</small>
        <div className="footer-contact">
          <p className="footer-contact-titel">Kontakt Info</p>
          <div className="footer-contact-content">
            <a className="footer-contact-tel" href="tel:+49216688844">
              02166 <span>888444</span>
            </a>
            <a
              className="footer-contact-email"
              href="mailto:info@rustica-pizzeria.de?subject=Feedback&body=Message"
            >
              info@rustica-pizzeria.de
            </a>
          </div>
        </div>
        <div className="footer-zahlung">
          <p className="footer-zahlung-titel">Zahlungsarten</p>
          <div className="footer-zahlung-content">
            <div className="footer-zahlung-content-paymethod">
              <p>PayPal</p>
              <BsPaypal color="#009cde" />
            </div>
            <div className="footer-zahlung-content-paymethod">
              <p>Bargeld</p>
              <BsCash color="yellow" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <p className="footer-links-titel">Links</p>
          <div className="footer-links-content">
            <NavLink className={"footer-link"} to="/zusatzstoffe-und-allergene">
              Zusatzstoffe und Allergene
            </NavLink>
            <NavLink className={"footer-link"} to="/impressum">
              Impressum
            </NavLink>
            <NavLink className={"footer-link"} to="/datenschutz">
              Datenschutz
            </NavLink>
            <NavLink className={"footer-link"} to="/credits">
              Credits
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
