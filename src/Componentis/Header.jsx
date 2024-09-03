import React from 'react';
import like from "../images/like.png";
import savat from "../images/savat.png";

export default function Header() {
  return (
    <header className="bg-gray-100 p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex justify-between items-center p-2  w-full"  >
          <li>
            <p className="text-2xl font-semibold text-gray-800">Exclusive</p>
          </li>
          <li className="flex   space-x-10"  >
            <a href="#"   className="text-gray-950 text-xl   hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-950  text-xl hover:text-blue-500">Contact</a>
            <a href="#" className="text-gray-950  text-xl hover:text-blue-500">About</a>
            <a href="#" className="text-gray-950   text-xl hover:text-blue-500">Sign in</a>
          </li>
          <li className="relative  flex  space-x-5"   >
            <div className="relative">
              <input type="text" placeholder="Qidiruv..." className="border border-gray-300 rounded pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-blue-500" />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.09-4.24A7.5 7.5 0 1111.75 2a7.5 7.5 0 017.5 7.5z" />
                </svg>
              </div>
            </div>

            <img src={like} alt="like" className="h-8 w-8" />
            <img src={savat} alt="savat" className="h-8 w-8" />
          </li>
       
        </ul>
      </div>
    </header>
  );
}
