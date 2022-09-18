import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LoggedContext from "./context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoggedContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoggedContext>
  </React.StrictMode>
);

reportWebVitals();
