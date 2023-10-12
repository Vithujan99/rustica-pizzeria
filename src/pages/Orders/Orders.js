import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../../utilities/formatCurrency";
import { getProductData } from "../../data/productsData";
import {
  getIngredientstData,
  getPriceWithIngredientsData,
} from "../../data/ingredientsData";

import "./Orders.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [action, setAction] = useState([]);
  useEffect(() => {
    axios
      .get("https://rustica-pizzeria-api.onrender.com/orders", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (!res.data.auth) {
          navigate("/login");
        }
      });
    //Code above only for auth
    const interval = setInterval(() => {
      // Perform some repeated action
      const fetchData = async () => {
        try {
          const data = await axios
            .get("https://rustica-pizzeria-api.onrender.com/orders", {
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
          setOrders(
            await data.sort(function (a, b) {
              return new Date(b.entryDate) - new Date(a.entryDate);
            })
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }, 1000);
    return () => {
      clearInterval(interval); // Clean up the interval
    };
  });

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

  /*const handleAction = (id) => {
    const actionOrder = action.find((order) => order.id === id);
    if (!actionOrder) {
      setAction([...action, { id: id }]);
      return;
    }
    handleDelete(id);
  };
  const checkAction = (id) => {
    const actionOrder = action.find((order) => order.id === id);
    if (!actionOrder) {
      return false;
    } else {
      return true;
    }
  };*/

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "https://rustica-pizzeria-api.onrender.com/orders/" + id,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      setOrders(orders.filter((order) => order._id !== id));
      setAction(action.filter((a) => a.id !== id));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Bezahlung</th>
            <th>Kunde</th>
            <th>Bestellung</th>
            <th>Anmerkung</th>
            <th>Datum/Summe</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="order-table-row">
              <td>{order.service}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <p>{order.vorname + " " + order.nachname}</p>
                <p>
                  {order.plz + " " + order.straße + " " + order.hausnummer}{" "}
                </p>
                <p>{order.telefonnummer}</p>
              </td>
              <td>
                {order.ordered_items.map((item) => (
                  <div key={item._id} className="orders-table-order">
                    <div key={item.id}>
                      {item.quantity + "x"}
                      <b className="item-name">
                        {getProductData(item.id).name}
                      </b>
                      {item.ingredientsIds.map((ingredient) => (
                        <div key={ingredient._id} className="zusatz-container">
                          {" Zusatz: " + ingredient.quantity + "x"}
                          <b className="zusatz-name">
                            {getIngredientstData(ingredient.ingredientId).name}
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
                  {formatCurrency(getTotalCost(order.ordered_items))}
                </p>
              </td>
              <td className="orders-table-anmerkung">{order.anmerkung}</td>
              <td>{new Date(order.entryDate).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
