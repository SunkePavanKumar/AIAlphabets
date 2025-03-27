// components/ui/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-6">
            Shape Tomorrow with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Master AI & Prompt Engineering through immersive learning experiences designed for Gen Z innovators.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Start AI Journey →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;