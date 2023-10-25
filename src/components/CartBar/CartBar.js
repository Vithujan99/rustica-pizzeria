import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ServiceContext } from "../../context/ServiceContext";
import { TimeContext } from "../../context/TimeContext";
import { ShowContext } from "../../context/ShowContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { NavLink } from "react-router-dom";
import CartCard from "./CartCard/CartCard";

import "./CartBar.css";

const CartBar = () => {
  const cart = useContext(CartContext);
  const serv = useContext(ServiceContext);
  const time = useContext(TimeContext);
  const show = useContext(ShowContext);

  return (
    <div>
      <div
        className={show.showBar ? "blackBackground" : "blackBackground hide"}
        onClick={() => show.handleBarClose()}
      ></div>
      <div
        className={show.showBar ? "barShoppedItems" : "barShoppedItems hide"}
      >
        <div className="closeBar" onClick={() => show.handleBarClose()}>
          X
        </div>
        <div className="barContent">
          <div className="barTitel">Warenkorb</div>
          {cart.getTotalCount() > 0 ? (
            <>
              <div className="barBody">
                {time.isOpen() ? (
                  <></>
                ) : (
                  <p className="barBody-closed">
                    zur Zeit geschlossen - nur Vorbestellung möglich
                  </p>
                )}
                <p className="barbody-imWagen-text">Aktuell im Wagen:</p>
                <div className="barBody-cards-holder">
                  {cart.items.map((currentProduct) => (
                    <CartCard
                      key={JSON.stringify(currentProduct)}
                      dataAll={currentProduct}
                    />
                  ))}
                </div>
              </div>
              <div className="barFooter">
                <h3>
                  Gesamt: {formatCurrency(cart.getTotalCost().toFixed(2))}
                </h3>

                <div className="barFooterService-buttons">
                  <button
                    className={
                      serv.service === "Lieferung"
                        ? "barFooterService-button active"
                        : "barFooterService-button"
                    }
                    onClick={() => serv.setService("Lieferung")}
                  >
                    Liefern
                  </button>
                  <button
                    className={
                      serv.service === "Abholung"
                        ? "barFooterService-button active"
                        : "barFooterService-button"
                    }
                    onClick={() => serv.setService("Abholung")}
                  >
                    Abholen
                  </button>
                </div>
                {serv.service === "Lieferung" ? (
                  <div className="barFooterService-input">
                    <label className="bar-plz-text">Gebe Postleitzahl an</label>
                    <input
                      className="bar-plz-input"
                      type="text"
                      name="PLZ"
                      minLength="5"
                      maxLength="5"
                      required
                      value={serv.plz}
                      onChange={(e) => serv.setPlz(e.target.value)}
                    />
                    {serv.testPlz() ? (
                      <></>
                    ) : (
                      <>
                        {serv.plz.length === 5 ? (
                          <>
                            <p className="bar-plz-error-text">
                              Befindet sich nicht im Liefergebiet
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className={
                    (serv.service === "Abholung" &&
                      cart.getTotalCost() >= 8.0) ||
                    (serv.service === "Lieferung" &&
                      serv.testPlz() &&
                      cart.getTotalCostNoDrinks() >= 15.0)
                      ? "barFooterKaufen row"
                      : "barFooterKaufen col"
                  }
                >
                  {serv.service === "Abholung" ? (
                    cart.getTotalCost() >= 8.0 ? (
                      <NavLink
                        className="barFooterKaufen-button"
                        to="/checkout"
                        onClick={() => show.handleBarClose()}
                      >
                        Zur Kasse
                      </NavLink>
                    ) : (
                      <div className="min-cost-red">
                        Mindestbestellwert 8,00€
                      </div>
                    )
                  ) : serv.testPlz() ? (
                    cart.getTotalCostNoDrinks() >= 15.0 ? (
                      <NavLink
                        className="barFooterKaufen-button"
                        to="/checkout"
                        onClick={() => show.handleBarClose()}
                      >
                        Zur Kasse
                      </NavLink>
                    ) : (
                      <div className="min-cost-red">
                        Mindestbestellwert für Lieferung (ohne Getränke) 15,00€
                      </div>
                    )
                  ) : (
                    <></>
                  )}

                  <button
                    className="barFooterKaufen-button"
                    onClick={() => {
                      cart.deleteCart();
                      show.handleBarClose();
                    }}
                  >
                    Wahrenkorb leeren
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="barBody">
              <h3>Noch keine Waren hinzugefügt!</h3>
              {time.isOpen() ? (
                <></>
              ) : (
                <p className="barGeschlossenText">
                  zur Zeit geschlossen - nur Vorbestellung möglich
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartBar;
