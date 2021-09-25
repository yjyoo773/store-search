import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/core.scss";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <App hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
