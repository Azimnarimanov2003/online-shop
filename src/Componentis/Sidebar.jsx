import React from 'react'
import red1 from '../images/qizil.png'
import servis from '../images/servis.png'
import servis1 from '../images/servis1.png'
import servis2 from '../images/servis2.png'

export default function Sidebar() {
  return (
    <div className="bg-white pb-5">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-5 text-red-900 mb-6">
          <img src={red1} alt="redi" className="w-8 h-8" />
          <p className="text-red-900 text-xl">Categories</p>
        </div>

        <h1 className="text-5xl text-black mb-4">Our services</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          <li className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img src={servis} alt="photo" className="mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h4 className="text-lg font-semibold pt-3 pb-1">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </li>
          <li className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img src={servis1} alt="photo" className="mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h4 className="text-lg font-semibold pt-3 pb-1">24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </li>
          <li className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img src={servis2} alt="photo" className="mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h4 className="text-lg font-semibold pt-3 pb-1">MONEY BACK GUARANTEE</h4>
            <p>We return money within 30 days</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
