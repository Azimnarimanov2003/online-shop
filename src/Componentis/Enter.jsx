import React from 'react';
import logo from '../images/qizil.png';
import pictur from '../images/picture1.png';
import picture1 from '../images/picture2.png';
import picture2 from '../images/picture3.png';
import picture3 from '../images/picture4.png';

export default function Enter() {
  return (
    <div  id='contact' className="mx-auto max-w-[1200px] p-5">
      <ul className="list-none">
        <li className="flex items-center gap-3">
          <img className="w-8 h-10" src={logo} alt="Services Icon" />
          <p className="text-lg font-semibold text-[#DB4444]">Services</p>
        </li>
        <h1 className="mt-5 text-3xl font-semibold text-left text-black">New Arrival</h1>
      </ul>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* PlayStation Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={pictur} alt="PS5 Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-white">PlayStation 5</h1>
            <p className="mt-5 text-white">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Women's Collection Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture1} alt="Women’s Collections Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-white">Women’s Collections</h2>
            <p className="mt-5 text-white">Featured woman collections that give you another vibe.</p>
            <button className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture2} alt="Speakers Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-white">Speakers</h3>
            <p className="mt-5 text-white">Amazon wireless speakers</p>
            <button className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Perfume Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture3} alt="Perfume Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-3xl font-semibold text-white">Perfume</h4>
            <p className="mt-5 text-white">GUCCI INTENSE OUD EDP</p>
            <button className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
