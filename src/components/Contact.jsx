import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-20 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* Animated Icons */}
      <motion.div
        className="absolute top-10 left-10 text-purple-500 text-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaPaperPlane />
      </motion.div>
      <motion.div
        className="absolute top-20 right-10 text-pink-500 text-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <FaEnvelope />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us <FaEnvelope className="text-purple-400 animate-bounce" />
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-center text-gray-300 mb-10 text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Got questions, suggestions, or ideas for new prompts? We’d love to hear from you!  
        Fill out the form below and our team will get back to you as soon as possible.
      </motion.p>

      {/* Form Card */}
      <motion.div
        className="w-full max-w-lg bg-gray-800 bg-opacity-70 backdrop-blur-md p-10 rounded-2xl shadow-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition font-medium flex items-center justify-center gap-2 mx-auto"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-gray-200">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition text-2xl"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition text-2xl"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-2xl"><FaInstagram /></a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-12 text-gray-400 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        &copy; 2025 PromptBlog. All rights reserved.
      </motion.div>

    </section>
  );
};

export default Contact;
