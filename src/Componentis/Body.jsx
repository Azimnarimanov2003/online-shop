import React, { useState, useEffect } from 'react';
import rasm from "../images/kalonka.png";

export default function Body() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='p-4 bg-black'>
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-36  pt-10 pb-10'>
          <div className='flex-1'>
            <ul className="list-none pt-10 m-0">
              <li>
                <h6 className="text-white">Categories</h6>
                <h2 className="text-2xl font-bold text-white">Enhance Your Music Experience</h2>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-4 items-center list-none p-0 m-0 mt-6">
              <li className="flex flex-col items-center bg-gray-50 rounded-full w-24 h-24 justify-center text-center shadow-lg">
                <p className="text-3xl font-bold">{timeLeft.days}</p>
                <p className="text-sm text-gray-700">Days</p>
              </li>
              <li className="flex flex-col items-center bg-gray-50 rounded-full w-24 h-24 justify-center text-center shadow-lg">
                <p className="text-3xl font-bold">{timeLeft.hours}</p>
                <p className="text-sm text-gray-700">Hours</p>
              </li>
              <li className="flex flex-col items-center bg-gray-50 rounded-full w-24 h-24 justify-center text-center shadow-lg">
                <p className="text-3xl font-bold">{timeLeft.minutes}</p>
                <p className="text-sm text-gray-700">Minutes</p>
              </li>
              <li className="flex flex-col items-center bg-gray-50 rounded-full w-24 h-24 justify-center text-center shadow-lg">
                <p className="text-3xl font-bold">{timeLeft.seconds}</p>
                <p className="text-sm text-gray-700">Seconds</p>
              </li>
            </ul>
            <ul className="list-none p-0 m-0">
              <li>
                <button className="bg-green-500 text-white py-2 px-6 mt-6 rounded transition-colors duration-300 hover:bg-white hover:text-black">
                  Buy Now!
                </button>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <img src={rasm} alt="bass" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
