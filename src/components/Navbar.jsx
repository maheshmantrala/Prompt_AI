import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart } from "react-icons/fi"; // ❤️ Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-purple-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">Prompt_AI</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-200 items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/blogs", label: "Prompts" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full ${
                isActive(item.to) ? "text-purple-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* ❤️ Favorites Link */}
          <Link
            to="/favorites"
            className="flex items-center gap-1 text-pink-500 hover:text-pink-400 transition"
          >
            <FiHeart /> Favorites
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-8 font-medium text-gray-200 text-center text-xl">
              {[
                { to: "/", label: "Home" },
                { to: "/blogs", label: "Blogs" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* ❤️ Favorites on Mobile */}
              <Link
                to="/favorites"
                className="text-pink-400 flex items-center gap-2 hover:text-pink-300"
                onClick={() => setIsOpen(false)}
              >
                <FiHeart /> Favorites
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
