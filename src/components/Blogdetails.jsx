import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import blogsData from "../data/data.json";
import { FiCopy, FiCheck, FiSearch, FiX, FiHeart } from "react-icons/fi";
import { FavoritesContext } from "../context/FavoritesContext";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  if (!blog)
    return (
      <div className="text-center text-white mt-20 text-xl">
        Blog not found.
      </div>
    );

  // ✅ Copy button handler
  const handleCopy = (index) => {
    navigator.clipboard.writeText(blog.prompts[index].text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  // ✅ Highlight matched text
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(
      regex,
      `<mark class='bg-purple-600 text-white rounded px-1'>$1</mark>`
    );
  };

  // ✅ Filter prompts
  const filteredPrompts = blog.prompts.filter(
    (prompt) =>
      prompt.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-full bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {searchTerm && (
              <FiX
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-red-400"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>
        </div>

        {/* Prompts */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800 bg-opacity-90 p-4 md:p-5 rounded-xl font-mono text-gray-200 border border-gray-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-0.5 break-words overflow-x-auto"
                whileHover={{ scale: 1.01 }}
              >
                {/* Buttons Container (Right corner) */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {/* Copy Button */}
                  <motion.button
                    className="bg-gray-700 text-gray-200 p-1.5 rounded-md hover:bg-purple-600 hover:text-white transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(index)}
                  >
                    {copiedIndex === index ? (
                      <FiCheck className="text-green-400" />
                    ) : (
                      <FiCopy />
                    )}
                  </motion.button>

                  {/* ❤️ Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(prompt)}
                    className={`p-1.5 rounded-md transition ${
                      favorites.some((f) => f.heading === prompt.heading)
                        ? "bg-pink-600 text-white"
                        : "bg-gray-700 hover:bg-pink-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiHeart />
                  </motion.button>
                </div>

                {/* Prompt Heading */}
                <h3
                  className="text-sm md:text-base font-semibold text-purple-300 mb-1"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(prompt.heading),
                  }}
                />

                {/* Prompt Text */}
                <p
                  className="whitespace-pre-wrap text-sm md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(prompt.text),
                  }}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No prompts found for{" "}
              <span className="text-purple-400">{searchTerm}</span>.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetails;
