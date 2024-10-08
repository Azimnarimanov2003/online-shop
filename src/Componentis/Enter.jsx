import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../images/qizil.png';
import pictur from '../images/picture1.png';
import picture1 from '../images/picture2.png';
import picture2 from '../images/picture3.png';
import picture3 from '../images/picture4.png';

const TELEGRAM_BOT_API_URL = 'https://api.telegram.org/bot7038719909:AAFLfoGEFJKATD6KyHwawlKefhPqZIqh2JA/sendMessage';
const CHAT_ID = '7153985176';

export default function Enter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setError(''); // Xatolarni tozalash
    setName(''); // Formani tozalash
    setPhone(''); // Formani tozalash
  };

  // Modal oynasidan tashqarida bosilgan bo'lsa, oynani yopish uchun
  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  // Formani yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Xatolarni tozalash
    setError('');

    // Maydonlar bo'sh bo'lmasligini tekshirish
    if (!name || !phone) {
      setError('Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    const message = `Name: ${name}\nPhone: ${phone}`;
    try {
      const response = await fetch(`${TELEGRAM_BOT_API_URL}?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`, {
        method: 'POST',
      });

      // Javobni tekshirish
      if (response.ok) {
        toast.success('Xabar yuborildi!');
        closeModal(); // Modalni yopish
      } else {
        throw new Error('Xatolik yuz berdi.');
      }
    } catch (error) {
      // toast.error('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
      setError('Xatolik yuz berdi.');
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  return (
    <div id='contact' className="mx-auto max-w-[1200px] p-5">
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
            <button onClick={openModal} className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Women's Collection Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture1} alt="Women’s Collections Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-white">Women’s Collections</h2>
            <p className="mt-5 text-white">Featured woman collections that give you another vibe.</p>
            <button onClick={openModal} className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture2} alt="Speakers Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-white">Speakers</h3>
            <p className="mt-5 text-white">Amazon wireless speakers</p>
            <button onClick={openModal} className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
          </div>
        </div>

        {/* Perfume Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg transition-transform duration-300 hover:scale-105">
          <img className="w-80 lg:w-[300px] mb-5 lg:mb-0" src={picture3} alt="Perfume Image" />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-3xl font-semibold text-white">Perfume</h4>
            <p className="mt-5 text-white">GUCCI INTENSE OUD EDP</p>
            <button onClick={openModal} className="mt-5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
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
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">Submit</button>
            </form>
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
          </div>
        </div>
      )}

    
    </div>
  );
}
