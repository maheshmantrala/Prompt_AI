import { useState } from "react";
import { motion } from "framer-motion";
import blogsData from "../data/data.json";
import BlogCard from "./BlogCard";

const categories = [
  { name: "All", icon: "📂" },
  { name: "Developers", icon: "💻" },
  { name: "Writers", icon: "✍️" },
  { name: "Students", icon: "🎓" },
  { name: "Professionals", icon: "💼" },
  { name: "Creative", icon: "🎨" }
];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter(blog => blog.category.name === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      {/* Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-purple-500 pt-10">
          Explore the Best Prompts
        </h1>
        <p className="mt-2 text-gray-300">
          Find AI prompts for developers, writers, students, and professionals.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-3 py-1.5 text-sm rounded-full font-medium transition flex items-center gap-1
              ${
                selectedCategory === cat.name
                  ? "bg-purple-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-purple-400 hover:text-white"
              }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
