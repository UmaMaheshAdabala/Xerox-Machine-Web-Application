import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
// import Info from './components/info';
import "./components/login.css";
import Admin_Dash from "./components/Admin_Dash.js";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_Bundles from "./components/Admin_Bundles.js";
import Admin_Login from "./components/Admin_Login.js";
import Admin_Mac_Info from "./components/Admin_Mac_Info.js";
import Admin_Mac_Usage from "./components/Admin_Mac_Usage.js";
import Admin_Repairs from "./components/Admin_Repairs.js";
import Admin1 from "./Admin1.js";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const database = [
    {
      username: "user1",
      password: "pass1",
      type: "user",
    },
    {
      username: "user2",
      password: "pass2",
      type: "admin",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // let usersdata = {
    //     "username":uname,
    //     "pwd":pass
    // }

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setStatus(userData.type);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="id1">Username</label>
          <input type="text" name="uname" id="id1" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label for="id2">Password </label>
          <input type="password" name="pass" id="id2" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      {isSubmitted && status == "user" ? (
        <div>
          <App />
        </div>
      ) : isSubmitted && status == "admin" ? (
        <div>
          <Admin1 />
        </div>
      ) : (
        <div className="app">
          <h1>Xerox Machine Log</h1>
          <div className="login-form">
            <div className="title">
              <b>Login</b>
            </div>
            {renderForm}
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
