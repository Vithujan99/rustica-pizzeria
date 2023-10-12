import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:4000/login", { username, password })
      .then((res) => {
        if (res.data.auth) {
          setError(false);
          localStorage.setItem("token", "Barear " + res.data.token);
          if (res.data.role === "employee") {
            navigate("/orders");
          }
          if (res.data.role === "admin") {
            navigate("/admin/orders");
          }
        } else {
          setError(true);
        }
      });
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Anmelden</h1>
        {error ? (
          <span className="login-wrong">Fehler bei der Anmeldung</span>
        ) : (
          <></>
        )}
        <input
          placeholder="Nutzername"
          className="login-username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Passwort"
          type="password"
          className="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="login-button" type="submit">
          Anmelden
        </button>
      </div>
    </div>
  );
};

export default Login;
