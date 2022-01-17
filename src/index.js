import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector("#root")
);
