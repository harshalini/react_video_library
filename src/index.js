import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import {
  CategoriesProvider,
  VideosProvider,
  FilterProvider,
  AuthenticationProvider,
  LikeProvider,
  WatchLaterProvider,
  HistoryProvider,
  PlaylistProvider,
  SearchProvider
}
  from "./contexts/allContext"
  
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <SearchProvider>
          <FilterProvider>
            <PlaylistProvider>
              <HistoryProvider>
                <WatchLaterProvider>
                  <LikeProvider>
                    <VideosProvider>
                      <CategoriesProvider>
                        <App />
                      </CategoriesProvider>
                    </VideosProvider>
                  </LikeProvider>
                </WatchLaterProvider>
              </HistoryProvider>
            </PlaylistProvider>
          </FilterProvider>
        </SearchProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
