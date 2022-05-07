import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoriesProvider } from "./contexts/allContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
    <App />
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
