import React from 'react'
import qrkod from '../images/Qrcode.png'
import qrkod1 from '../images/Frame.png'

export default function Footer() {
  return (
      <div  id='footer' className='bg-[#222] pt-1'>
    <div className="container max-w-[1200px] mx-auto px-4 py-10  text-white">
      <div className="flex flex-wrap gap-6 justify-between items-start">
        
        {/* Exclusive Section */}
        <div>
          <ul>
            <li className="mb-5">
              <a className="text-2xl font-bold hover:text-gray-400 transition" href="#">Exclusive</a>
            </li>
            <li>
              <a className="text-xl font-medium hover:text-gray-400 transition" href="#">Subscribe</a>
            </li>
            <p className="mt-3 text-base">Get 10% off your first order</p>
            <input className="w-full mt-5 p-2 bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white" type="text" placeholder="Enter your email" />
          </ul>``
        </div>

        {/* Support Section */}
        <div>
          <ul>
            <li className="mb-5">
              <a className="text-xl font-medium hover:text-gray-400 transition" href="#">Support</a>
            </li>
            <p className="text-base">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="mailto:azimnarimoanov@gmail.com">azimnarimonov@gmail.com</a>
            </li>
            <p className="mt-3 text-base">+998 33 926 00 03</p>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <ul>
            <li className="mb-5">
              <a className="text-xl font-medium hover:text-gray-400 transition" href="#">Account</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">My Account</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Login / Register</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Cart</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Wishlist</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Shop</a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <ul>
            <li className="mb-5">
              <a className="text-xl font-medium hover:text-gray-400 transition" href="#">Quick Links</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Privacy Policy</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Terms Of Use</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">FAQ</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <ul className="text-center">
            <li className="mb-5">
              <a className="text-xl font-medium hover:text-gray-400 transition" href="#">Download App</a>
            </li>
            <li className="mt-3">
              <a className="text-base hover:text-gray-400 transition" href="#">Save $3 with App New User Only</a>
            </li>
            <ul className="flex justify-center gap-5 mt-5">
              <li><img className="w-20 h-20" src={qrkod} alt="App Icon 1" /></li>
              <li><img className="w-[110px] h-[80px]" src={qrkod1} alt="App Icon 2" /></li>
              
            </ul>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
