import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

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
          <Link to="/">PromptBlog</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-200">
          <Link
            to="/"
            className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
          >
            Contact
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
            className="md:hidden fixed inset-0 bg-purple bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-8 font-medium text-gray-200 text-center text-xl">
              <Link
                to="/"
                className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blogs"
                className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
