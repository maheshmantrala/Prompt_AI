// src/context/FavoritesContext.jsx
import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // 🧩 Load saved favorites from localStorage when app starts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // 💾 Save favorites to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ❤️ Add or remove a favorite
  const toggleFavorite = (prompt) => {
    const exists = favorites.some((f) => f.heading === prompt.heading);
    if (exists) {
      setFavorites(favorites.filter((f) => f.heading !== prompt.heading));
    } else {
      setFavorites([...favorites, prompt]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
