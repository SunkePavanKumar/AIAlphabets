import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: { 
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.3 }
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-3"
        >
          <img src="/logo.png" alt="AI Academy Logo" className="h-8 sm:h-10" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            AI Alphabets
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {['/', '/about', '/courses', '/contact'].map((path) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => 
                    `text-sm lg:text-base text-gray-300 hover:text-white transition-colors
                    ${isActive ? 'border-b-2 border-purple-400' : ''}`
                  }
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 md:hidden bg-gray-900/95 backdrop-blur-xl pt-4"
            >
              <div className="container mx-auto px-4 h-full flex flex-col">
                {/* Header Section */}
                <div className="bg-gray-900/90 rounded-lg p-4 mb-4 shadow-xl backdrop-blur-lg">
                  <div className="flex justify-between items-center">
                    <Link 
                      to="/" 
                      className="flex items-center space-x-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src="/logo.png" alt="AI Academy Logo" className="h-8 sm:h-10" />
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                        AI Alphabets
                      </span>
                    </Link>
                    <button
                      className="text-gray-300 p-2 rounded-lg hover:bg-gray-800/50"
                      onClick={() => setIsOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Menu Items */}
                <ul className="space-y-4 flex-1">
                  {['/', '/about', '/courses', '/contact'].map((path) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className={({ isActive }) => 
                          `block py-3 px-4 rounded-lg text-gray-100 hover:bg-gray-800/50 transition-colors
                          ${isActive ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-l-4 border-purple-400' : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="py-6 border-t border-gray-800 mt-auto">
                  <p className="text-gray-400 text-sm text-center">
                    Empowering Future AI Leaders
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
