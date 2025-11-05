// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";  // ✅ You missed this line
import App from "./App.jsx";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx"; // ✅ Added favorites provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
