// src/pages/Favorites.jsx
import { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FiTrash2, FiCopy, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [copied, setCopied] = useState(false);

  // 🟣 Copy prompt
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // 🧠 Open in ChatGPT
  const openInChatGPT = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank");
  };

  // 🌈 Open in Gemini
  const openInGemini = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://gemini.google.com/app?q=${encoded}`, "_blank");
  };

  // 🩶 Empty state
  if (favorites.length === 0)
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-300 text-center px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">
          No Favorites Yet ❤️
        </h2>
        <p className="text-gray-400 max-w-md">
          You haven’t saved any prompts yet.{" "}
          <Link
            to="/blogs"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition"
          >
            Browse prompts
          </Link>{" "}
          and tap the <span className="text-pink-500">❤️</span> icon to add them
          here.
        </p>
      </div>
    );

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-28 sm:pt-24 md:pt-20 px-6 md:px-12 lg:px-20 transition-all">
      {/* Page Title */}
      <motion.h1
        className="mt-4 text-3xl md:text-4xl font-extrabold text-purple-400 text-center tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Favorite Prompts
      </motion.h1>

      {/* ✨ Creative CTA Section */}
      <motion.div
        className="flex flex-col items-center justify-center mt-3 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-400 text-center text-base md:text-lg">
          <span className="text-purple-300 font-medium">
            Looking for fresh inspiration?
          </span>
        </p>
        <Link
          to="/blogs"
          className="mt-2 text-purple-400 font-semibold text-lg hover:text-purple-300 relative transition-all duration-300"
        >
          Browse more prompts →
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>

      {/* Favorites Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {favorites.map((fav, i) => (
          <motion.div
            key={i}
            className="relative bg-gray-800/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-md hover:shadow-purple-700/30 hover:-translate-y-1 transition-all flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Heading */}
            <h3 className="text-lg font-semibold text-purple-300 mb-2 line-clamp-1">
              {fav.heading}
            </h3>

            {/* Text */}
            <p className="text-gray-400 text-sm whitespace-pre-wrap line-clamp-5 mb-4">
              {fav.text}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-2 mt-auto">
              {/* Copy */}
              <button
                onClick={() => handleCopy(fav.text)}
                className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-700 hover:bg-purple-600 transition"
                title="Copy prompt"
              >
                <FiCopy size={14} /> Copy
              </button>

              {/* ChatGPT */}
              <button
                onClick={() => openInChatGPT(fav.text)}
                className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-green-600 hover:bg-green-700 transition"
                title="Test in ChatGPT"
              >
                <FiExternalLink size={14} /> ChatGPT
              </button>

              {/* Gemini */}
              <button
                onClick={() => openInGemini(fav.text)}
                className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-blue-600 hover:bg-blue-700 transition"
                title="Test in Gemini"
              >
                <FiExternalLink size={14} /> Gemini
              </button>

              {/* Delete */}
              <button
                onClick={() => toggleFavorite(fav)}
                className="p-1.5 text-gray-400 hover:text-red-500 transition"
                title="Remove from favorites"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Copy Toast (Top position) */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg z-[100]"
          >
            ✅ Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Favorites;
