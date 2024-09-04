import React from 'react'
import apple from '../images/iphone1.png'
import vector from '../images/Vector.png'
import iphone from '../images/iphone.png'

export default function Section() {
  return (
    <div>
      <div className="   bg-gray-950">
        <div className="container  section max-w-[1200px]">
            <div className="section-box flex flex-col-reverse lg:flex-row items-center lg:space-x-24">
                <ul className='h-auto p-8 md:p-16 flex flex-col space-y-8'>
                    <li className='flex items-center space-x-6 md:space-x-9'>
                        <img src={apple} alt="apple" className='w-12 md:w-16 lg:w-20'/>
                        <p className='text-white text-sm md:text-lg lg:text-xl'>iPhone 14 Series</p>
                    </li>
                    <li className='mt-4'>
                        <h1 className='text-white text-2xl md:text-4xl lg:text-5xl w-full md:w-64'>
                        Up to 10% off Voucher
                        </h1>
                    </li>
                    <li className='flex items-center space-x-2 md:space-x-3 mt-4'>
                        <p className='text-white text-lg md:text-xl'>
                        Shop Now
                        </p>
                        <img src={vector} alt="vector" className='w-4 md:w-6 lg:w-8'/>
                    </li>
                </ul>
                <div className='flex justify-center w-full lg:w-auto mb-8 lg:mb-0'>
                    <img src={iphone} alt="img" className='w-full h-auto max-w-xs  sm:max-w-sm md:max-w-sm lg:max-w-full'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
