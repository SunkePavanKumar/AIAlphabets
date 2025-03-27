// components/ui/CourseCard.js
import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ title, description, image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all"
    >
      <div className="mb-4 relative h-48 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
      </div>
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-3">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
      <button className="mt-4 text-blue-400 hover:text-purple-300 flex items-center gap-2">
        Explore Course <span>→</span>
      </button>
    </motion.div>
  );
};

export default CourseCard;