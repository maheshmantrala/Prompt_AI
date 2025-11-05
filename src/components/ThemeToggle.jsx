import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // ✅ Only run this on the client side
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const storedTheme = localStorage.getItem("theme");
      setTheme(storedTheme || (prefersDark ? "dark" : "light"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        fixed bottom-6 right-6 z-50 
        bg-gray-800 dark:bg-gray-200 
        p-3 rounded-full shadow-lg 
        hover:scale-110 transition-transform
      "
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400" size={20} />
      ) : (
        <FiMoon className="text-gray-800" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
