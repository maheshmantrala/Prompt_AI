import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-20 font-sans">

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Prompt_AI
      </motion.h1>

      {/* Content Card */}
      <motion.div
        className="max-w-3xl bg-gray-800 bg-opacity-70 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed tracking-wide font-light">
          PromptBlog is your go-to platform for discovering the best AI prompts.
          Whether you are a developer, writer, student, or professional, our curated prompts
          help you stay ahead of the curve, save time, and boost creativity.
          We focus on quality, usability, and inspiration for all your AI-powered tasks.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="bg-gray-700 bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
          <div className="text-purple-400 text-3xl mb-4">💡</div>
          <h4 className="font-bold text-white mb-2">Curated Prompts</h4>
          <p className="text-gray-300">High-quality prompts curated for maximum efficiency.</p>
        </div>
        <div className="bg-gray-700 bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
          <div className="text-pink-400 text-3xl mb-4">⚡</div>
          <h4 className="font-bold text-white mb-2">Save Time</h4>
          <p className="text-gray-300">Quickly find the right AI prompt for your task.</p>
        </div>
        <div className="bg-gray-700 bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
          <div className="text-blue-400 text-3xl mb-4">🚀</div>
          <h4 className="font-bold text-white mb-2">Boost Creativity</h4>
          <p className="text-gray-300">Inspire new ideas and innovative solutions.</p>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg">
          <p className="text-gray-200 italic">"PromptBlog has transformed my workflow! The AI prompts are next-level." – Priya</p>
        </div>
        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg">
          <p className="text-gray-200 italic">"As a developer, I save hours every week thanks to these curated prompts." – Raj</p>
        </div>
      </motion.div>

      {/* Call-to-Action */}
  {/* Call-to-Action */}
<div className="mt-12 flex justify-center">
   <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-12 text-center"
>
  <Link
    to="/blogs"
    className="inline-block bg-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-600 transition font-medium"
  >
    Explore AI Prompts
  </Link>
</motion.div>
</div>


      {/* Footer */}
      <motion.div
        className="mt-16 text-gray-400 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        &copy; 2025 Prompt_AI. All rights reserved.
      </motion.div>

    </section>
  );
};

export default About;
