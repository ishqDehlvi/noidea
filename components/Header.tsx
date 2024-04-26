'use client'
import React, { useState, Fragment } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HamburgerIcon = (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const CrossIcon = (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className="flex justify-between items-center p-10 bg-white text-black">
      <div className="text-xl font-bold">My Logo</div>
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Fragment>
            <span className="ml-2 text-2xl font-circular">Close</span>
            {CrossIcon}
          </Fragment>
        ) : (
          <Fragment>
            <span className="ml-2 mx-2 text-2xl font-circular">Menu</span>
            {HamburgerIcon}
          </Fragment>
        )}
      </button>
      {isMenuOpen && (
        <div className="font-circular text-xl border border-solid border-black-500 absolute top-16 right-4 bg-white text-gray-800 p-8 m-4 rounded-lg shadow-md">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;