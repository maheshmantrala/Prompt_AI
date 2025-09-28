import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <h2 className="text-lg font-bold mb-2 text-purple-400">{blog.title}</h2>
      <p className="text-gray-300 text-sm">{blog.description}</p>
      <div className="mt-2 text-yellow-400 text-sm flex flex-wrap gap-2">
        {blog.category.icon} {blog.category.name}
      </div>
    </motion.div>
  );
};

export default BlogCard;
