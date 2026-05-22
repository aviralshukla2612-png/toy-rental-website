import React from "react";                 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { DataProvider } from "./context/DataProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>  
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
