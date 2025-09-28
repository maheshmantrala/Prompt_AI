import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Shapes */}
      <div className="absolute top-[5%] left-[5%] w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[8%] w-16 h-16 sm:w-24 sm:h-24 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-full opacity-30 animate-spin-slow"></div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl z-10">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI won’t replace your job,
          <br />
          <span className="text-purple-500">
            but someone using AI will.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Stay ahead of the curve — discover the best AI prompts for developers, writers, students, and professionals.
        </motion.p>

        {/* Button */}
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
    </section>
  );
};

export default HeroSection;
