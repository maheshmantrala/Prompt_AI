import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogsData from "../data/data.json";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!blog)
    return (
      <div className="text-center text-white mt-20 text-xl">
        Blog not found.
      </div>
    );

  const handleCopy = (index) => {
    navigator.clipboard.writeText(blog.prompts[index].text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 py-20 relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-5xl mx-auto bg-gray-900 bg-opacity-75 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl">
        {/* Title */}
        <motion.h1
          className="text-2xl md:text-4xl font-extrabold text-purple-400 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {blog.title}
        </motion.h1>

        {/* Prompts */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {blog.prompts.map((prompt, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-90 p-4 md:p-5 rounded-xl font-mono text-gray-200 border border-gray-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-0.5 break-words relative overflow-x-auto"
              whileHover={{ scale: 1.01 }}
            >
              {/* Prompt Heading */}
              <h3 className="text-sm md:text-base font-semibold text-purple-300 mb-1">
                {prompt.heading}
              </h3>
              
              {/* Prompt Text */}
              <p className="whitespace-pre-wrap text-sm md:text-base">{prompt.text}</p>

              {/* Copy Button */}
              <motion.button
                className="absolute top-2 right-2 bg-gray-700 text-gray-200 p-1.5 rounded-md hover:bg-purple-600 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(index)}
              >
                {copiedIndex === index ? <FiCheck className="text-green-400" /> : <FiCopy />}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetails;
