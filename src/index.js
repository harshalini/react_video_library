import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { CategoriesProvider, VideosProvider, FilterProvider } from "./contexts/allContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <VideosProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </VideosProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
