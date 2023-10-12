import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TimeContext } from "../../../context/TimeContext";

import "./AboutUs.css";

const AboutUs = () => {
  const time = useContext(TimeContext);
  const day = time.getDay();
  return (
    <div className="home-aboutus">
      <div className="home-aboutus-titel-holder">
        <Link className="home-aboutus-titel" to="/about">
          Über Uns
        </Link>
      </div>
      <div className="container home-aboutus-content-container">
        <div className="home-aboutus-content-adresse">
          <h2 className="home-dress-titel">Adresse</h2>
          <address className="home-adress-content">
            <span>Meerkamp 111</span>
            <span> 41238 Mönchengladbach</span>
            <a className="home-adress-conten-tel" href="tel:+49216688844">
              02166 <span>888444</span>
            </a>
          </address>
        </div>
        <div className="home-aboutus-content-öffnungzeiten">
          <h2 className="table-titel">ÖffnungsZeiten</h2>
          <table className="öffnungzeiten-table">
            <tbody>
              <tr
                className={
                  day === "Monday" || day === "Tuesday"
                    ? "table-line-active"
                    : "table-line"
                }
              >
                <td>Mo-Di:</td>
                <td>17:30-22:30</td>
              </tr>
              <tr
                className={
                  day === "Wednesday" || day === "Thursday"
                    ? "table-line-active"
                    : "table-line"
                }
              >
                <td>Mi-Do:</td>
                <td>11:30-14:30 und 17:30 - 22:30</td>
              </tr>
              <tr
                className={
                  day === "Friday" ? "table-line-active" : "table-line"
                }
              >
                <td>Fr:</td>
                <td>11:30-14:30 und 17:30 - 23:00</td>
              </tr>
              <tr
                className={
                  day === "Saturday" ? "table-line-active" : "table-line"
                }
              >
                <td>Sa:</td>
                <td>17:00-23:00</td>
              </tr>
              <tr
                className={
                  day === "Sunday" ? "table-line-active" : "table-line"
                }
              >
                <td>So/Feiertags:</td>
                <td>17:00-22:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
