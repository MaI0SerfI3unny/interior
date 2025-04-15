import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";
import { App } from "./_components/App/App.jsx";
// import { LandingPage } from "./landing/LandingPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <LandingPage /> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
