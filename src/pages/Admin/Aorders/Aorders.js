import React, { useEffect, useState } from "react";
import "./Aorders.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getProductData } from "../../../data/productsData";
import {
  getIngredientstData,
  getPriceWithIngredientsData,
} from "../../../data/ingredientsData";
import { formatCurrency } from "../../../utilities/formatCurrency";

const Aorders = () => {
  const navigate = useNavigate();
  const weeks = Array.from(Array(52).keys());
  const days = Array.from(Array(7).keys());
  const [orders, setOrders] = useState([]);
  const daysName = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios
          .get("https://rustica-pizzeria-api.onrender.com/admin/orders", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (!res.data.auth) {
              navigate("/login");
            }
            return res.data.allOrder;
          });

        const weeklyOrders = Object.groupBy(
          await data.sort(function (a, b) {
            return new Date(b.entryDate) - new Date(a.entryDate);
          }),
          ({ entryDate }) => {
            let currentDate = new Date(entryDate);
            let startDate = new Date(currentDate.getFullYear(), 0, 1);
            let days = Math.floor(
              (currentDate - startDate) / (24 * 60 * 60 * 1000)
            );
            var weekNumber = Math.ceil(days / 7);
            return weekNumber;
          }
        );
        const weeklyDayOrders = weeks.map((w) => {
          if (weeklyOrders[w]) {
            return Object.groupBy(weeklyOrders[w], ({ entryDate }) => {
              let currentDate = new Date(entryDate);
              return currentDate.getDay();
            });
          } else {
            return null;
          }
        });
        setOrders(weeklyDayOrders);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getTotalCost(order) {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    order.map((product) => {
      const productData = getProductData(product.id);

      let ingCost = 0;
      // eslint-disable-next-line array-callback-return
      product.ingredientsIds.map((ing) => {
        const ingData = getPriceWithIngredientsData(ing.ingredientId);
        ingCost += ingData.price * ing.quantity;
      });

      totalCost += (productData.price + ingCost) * product.quantity;
    });
    return totalCost;
  }

  const handleDeleteWeek = async (week) => {
    // eslint-disable-next-line array-callback-return
    days.map((d) => {
      orders[week][d]?.map(async (order) => {
        try {
          const res = await axios
            .delete(
              "https://rustica-pizzeria-api.onrender.com/admin/orders/" +
                order._id,
              {
                headers: {
                  "x-access-token": localStorage.getItem("token"),
                },
              }
            )
            .then((res) => {
              if (!res.data.auth) {
                navigate("/login");
              }
            });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      });
    });
    setOrders((orders[week] = []));
  };

  const handleDeleteDay = async (week, day) => {
    orders[week][day]?.map(async (order) => {
      try {
        const res = await axios
          .delete(
            "https://rustica-pizzeria-api.onrender.com/admin/orders/" +
              order._id,
            {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            if (!res.data.auth) {
              navigate("/login");
            }
          });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      try {
        const res = await axios.delete(
          "https://rustica-pizzeria-api.onrender.com/orders/" + order._id,
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    });
    setOrders((orders[week][day] = []));
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      {weeks.map((w) =>
        orders[w] ? (
          <div
            className="orders-week-container"
            key={new Date().getFullYear + " " + w}
          >
            <h2 className="orders-week-titel">Woche {w}</h2>
            {days.map((d) =>
              orders[w][d] ? (
                <div
                  className="orders-day-container"
                  key={new Date().getFullYear + " " + w + " " + d}
                >
                  <h3 className="orders-day-titel">{daysName[d]}</h3>
                  <table className="orders-table">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Bezahlung</th>
                        <th>Kunde</th>
                        <th>Bestellung</th>
                        <th>Datum/Summe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders[w][d].map((order) => (
                        <tr key={order._id}>
                          <td>{order.service}</td>
                          <td>{order.paymentMethod}</td>
                          <td>
                            <p>{order.vorname + " " + order.nachname}</p>
                            <p>
                              {order.plz +
                                " " +
                                order.straße +
                                " " +
                                order.hausnummer}{" "}
                            </p>
                            <p>{order.telefonnummer}</p>
                          </td>
                          <td>
                            {order.ordered_items.map((item) => (
                              <div
                                key={item._id}
                                className="orders-table-order"
                              >
                                <div key={item.id}>
                                  {item.quantity + "x"}
                                  <b className="item-name">
                                    {getProductData(item.id).name}
                                  </b>
                                  {item.ingredientsIds.map((ingredient) => (
                                    <div
                                      key={ingredient._id}
                                      className="zusatz-container"
                                    >
                                      {" Zusatz: " + ingredient.quantity + "x"}
                                      <b className="zusatz-name">
                                        {
                                          getIngredientstData(
                                            ingredient.ingredientId
                                          ).name
                                        }
                                      </b>
                                    </div>
                                  ))}

                                  {item.description ? (
                                    <>
                                      Beschreibung:{" "}
                                      <div className="item-description">
                                        {item.description}
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            ))}
                            <p className="orders-table-order-betrag">
                              {formatCurrency(
                                getTotalCost(order.ordered_items)
                              )}
                            </p>
                          </td>
                          <td>{new Date(order.entryDate).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    className="orders-delete-day"
                    onClick={() => handleDeleteDay(w, d)}
                  >
                    {daysName[d]} Löschen
                  </div>
                </div>
              ) : (
                <></>
              )
            )}

            <div
              className="orders-delete-week"
              onClick={() => handleDeleteWeek(w)}
            >
              Woche {w} Löschen
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Aorders;
