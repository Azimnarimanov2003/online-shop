import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rasm from "../images/kalonka.png";
export default function Body() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 2100 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setError('');
    setSubmitted(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setError('Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    const message = `Name: ${name}\nPhone: ${phone}`;
    await fetch(`${TELEGRAM_BOT_API_URL}?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`, {
      method: 'POST',
    });

    closeModal();
    setSubmitted(true);

    // Toast xatosiz chaqirilishi kerak
    toast.success('Xabar yuborildi!', { position: "top-right" });
    setName('');
    setPhone('');
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className='p-4 bg-black'>
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-36 pt-10 pb-10'>
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
                <button onClick={openModal} className="bg-green-500 text-white py-2 px-6 mt-6 rounded transition-colors duration-300 hover:bg-white hover:text-black">
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

      {/* Modal */}
      {isModalOpen && (
        <div id="modal-overlay" className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="border border-gray-300 rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="border border-gray-300 rounded w-full px-3 py-2"
                />
              </div>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Submit</button>
              {error && (
                <p className="mt-4 text-red-500 text-center">{error}</p>
              )}
            </form>
            {submitted && !error && (
              <p className="mt-4 text-green-500 text-center">Yuborildi!</p>
            )}
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}



const TELEGRAM_BOT_API_URL = 'https://api.telegram.org/bot7038719909:AAFLfoGEFJKATD6KyHwawlKefhPqZIqh2JA/sendMessage';
const CHAT_ID = '7153985176';