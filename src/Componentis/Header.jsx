// Header.js
import React, { useState, useEffect } from 'react';
import like from "../images/like.png";
import savat from "../images/savat.png";
import { Link } from 'react-router-dom';
import usesharedStore from './Store/Store'; // Import Store

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cards } = usesharedStore(); // Store'dan cards olish
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    setHasItems(cards.length > 0);
  }, [cards]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header  id='home'   className=" z-50 bg-gray-100 p-2  shadow-md border-b  border-slate-400 fixed top-0 left-0 right-0">
      <div className="container max-w-[1200px] mx-auto px-4  ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-2xl font-semibold text-gray-800">Exclusive</p>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-950 text-xl hover:text-blue-500">Home</a>
            <a href="#contact" className="text-gray-950 text-xl hover:text-blue-500">Contact</a>
            <a href="#gallery" className="text-gray-950 text-xl hover:text-blue-500">About</a>
            <a href="#footer" className="text-gray-950 text-xl hover:text-blue-500">Sign in</a>
          </nav>

          <div className="flex items-center space-x-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Qidiruv..."
                className="border border-gray-300 rounded pl-8 pr-3 py-1 w-full md:w-64 md:pl-10 md:pr-4 md:py-2 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m2.09-4.24A7.5 7.5 0 1111.75 2a7.5 7.5 0 017.5 7.5z"
                  />
                </svg>
              </div>
            </div>

          
            <Link to="/korzinka">
              <div className="relative">
                <img src={savat} alt="savat" className="h-8 w-8" />
                {hasItems && <div className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></div>}
              </div>
            </Link>

            {/* Burger Icon */}
            <button onClick={toggleMenu} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-gray-100 z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button onClick={toggleMenu} className="text-right p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#" className="block text-gray-950 text-xl hover:text-blue-500 py-2 pl-4">Home</a>
          <a href="#" className="block text-gray-950 text-xl hover:text-blue-500 py-2 pl-4">Contact</a>
          <a href="#" className="block text-gray-950 text-xl hover:text-blue-500 py-2 pl-4">About</a>
          <a href="#" className="block text-gray-950 text-xl hover:text-blue-500 py-2 pl-4">Sign in</a>
        </nav>
      </div>
    </header>
  );
}
