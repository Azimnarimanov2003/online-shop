import React from 'react';
import red from '../images/qizil.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

export default function Wrap() {
  return (
    <div className="container max-w-[1200px] mx-auto px-4">
      <ul className="space-y-6 border-b-2  pb-12 pt-12">
        <li className='flex items-center gap-5 text-red-900'>
          <img src={red} alt="red" className="w-8 h-8" />
          <p className='text-red-900 text-xl'>Categories</p>
        </li>
        <li>
          <h2 className='text-black text-4xl'>
            Browse By Category
          </h2>
        </li>
        <li className='flex flex-wrap gap-4 lg:justify-between'>
          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={img1} alt="logo" className="w-24 h-24 mb-2" />
            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              Phones
            </h5>
          </div>

          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={img2} alt="logo" className="w-24 h-24 mb-2" />
            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              Computers
            </h5>
          </div>

          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={img3} alt="logo" className="w-24 h-24 mb-2" />
            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              SmartWatch
            </h5>
          </div>

          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src={img4} alt="logo" className="w-24 h-24 mb-2 rounded-t-lg filter brightness-50" />
            

            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              Camera
            </h5>
          </div>

          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={img5} alt="logo" className="w-24 h-24 mb-2 rounded-t-lg" />
            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              HeadPhones
            </h5>
          </div>

          <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={img6} alt="logo" className="w-24 h-24 mb-2 rounded-t-lg" />
            <h5 className="text-gray-800 text-center mt-2 transition-colors duration-300 ease-in-out hover:text-white">
              Gaming
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
}
