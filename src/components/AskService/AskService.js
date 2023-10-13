import React, { useState, useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { TbTruckDelivery } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import "./AskService.css";
import { useLocation } from "react-router-dom";

const AskService = () => {
  const serv = useContext(ServiceContext);
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  let location = useLocation();

  return (
    <div
      className={
        sessionStorage.getItem("ser") === "Abholung" ||
        serv.askPlz ||
        location.pathname === "/orders" ||
        location.pathname === "/login" ||
        location.pathname === "/admin/orders"
          ? "askServiceContainer hide"
          : "askServiceContainer"
      }
    >
      <div
        className={show ? "blackBackground" : "blackBackground hide"}
        onClick={handleClose}
      />
      {serv.service === "null" ? (
        <div className={show ? "askService" : "askService hide"}>
          <div
            className="deliverySide"
            onClick={() => serv.setService("Lieferung")}
          >
            <div className="deliveryImage">
              <TbTruckDelivery size="auto" style={{ color: "#fff" }} />
            </div>
            <button className="askServiceButton left">Lieferung</button>
          </div>
          <div
            className="pickUpSide"
            onClick={() => {
              serv.setService("Abholung");
              handleClose();
            }}
          >
            <div className="pickUpImage">
              <BsShop size="auto" style={{ color: "#fff" }} />
            </div>
            <button className="askServiceButton right">Abholung</button>
          </div>
        </div>
      ) : (
        <div
          className={show && serv.askPlz === null ? "askPLZ" : "askPLZ hide"}
        >
          <label className="plz-text">Gebe Postleitzahl an</label>
          <input
            className="plz-input"
            type="text"
            name="PLZ"
            minLength="5"
            maxLength="5"
            required
            value={serv.plz}
            onChange={(e) => serv.setPlz(e.target.value)}
          />
          {serv.testPlz() ? (
            <button
              className="plz-button"
              onClick={() => {
                handleClose();
                serv.setAskPlzShow();
              }}
            >
              Ok
            </button>
          ) : (
            <>
              {serv.plz.length === 5 ? (
                <>
                  <p className="plz-error-text">
                    Befindet sich nicht im Liefergebiet
                  </p>
                </>
              ) : (
                <></>
              )}
            </>
          )}
          <button
            className="back-button"
            onClick={() => serv.setService("null")}
          >
            Zurück
          </button>
        </div>
      )}
    </div>
  );
};

export default AskService;
