'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const menuWidth = menuRef.current.offsetWidth;
      menuRef.current.style.minWidth = `${menuWidth}px`;
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
        </Link>
        <nav>
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 6.293a1 1 0 011.414 0L12 10.586l4.879-4.879a1 1 0 111.414 1.414L13.414 12l4.879 4.879a1 1 0 01-1.414 1.414L12 13.414l-4.879 4.879a1 1 0 01-1.414-1.414L10.586 12 5.707 7.121a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 z-10"
          >
            <div
              ref={menuRef}
              className="bg-white text-gray-800 py-4 px-6 shadow-md rounded-lg"
            >
              <ul className="grid grid-cols-1 gap-4">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/" className="block px-3 py-2 hover:bg-gray-200">
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/blog" className="block px-3 py-2 hover:bg-gray-200">
                    Blog
                  </Link>
                </motion.li>
                {/* Add more navigation links */}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="absolute inset-0 bg-gray-800 opacity-50 z-10"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      )}
    </header>
  );
};

export default Header;
