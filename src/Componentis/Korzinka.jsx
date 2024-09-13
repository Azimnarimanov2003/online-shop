import React, { useEffect, useState } from 'react';
import usesharedStore from './Store/Store';
import delete1 from '../images/delete.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Korzinka() {
  const { cards, setCards } = usesharedStore();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  useEffect(() => {
    // Sahifani yuklaganda yuqoriga scroll qilish
    window.scrollTo(0, 0);
  }, []);
  const handleDelete = (id) => {
    setCards(cards.filter(product => product.id !== id));
  };

  const handleOrder = () => {
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setCustomerName('');
    setCustomerPhone('');
  };

  const sendMessage = async () => {
    const token = "7038719909:AAFLfoGEFJKATD6KyHwawlKefhPqZIqh2JA";
    const chat_id = "7153985176";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const messageText = `Ism: ${customerName}\nNomer: ${customerPhone}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: messageText,
        }),
      });
      
      const data = await response.json();
      
      if (data.ok) {
        toast.success('Xabar yuborildi!');
        handleCloseOrderModal();
      } else {
        toast.error('Xabar yuborishda xato yuz berdi.');
      }
    } catch (error) {
      console.error('Xato:', error);
      toast.error('Xabar yuborishda xato yuz berdi.');
    }
  };

  const handleOrderSubmit = async () => {
    if (customerName.trim() && customerPhone.trim()) {
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: customerName,
            phone: customerPhone,
            items: cards,
          }),
        });

        if (response.ok) {
          await sendMessage();
        } else {
          toast.error('Buyurtma yuborishda xato yuz berdi.');
        }
      } catch (error) {
        console.error('Buyurtma yuborishda xato:', error);
        toast.error('Buyurtma yuborishda xato yuz berdi.');
      }
    } else {
      toast.warn('Iltimos, barcha maydonlarni to\'ldiring.');
    }
  };

  const handleQuantityChange = (id, increment) => {
    setCards(cards.map(product => 
      product.id === id 
        ? { ...product, quantity: Math.max((product.quantity || 1) + increment, 1) }
        : product
    ));
  };

  return (
    <>
      <div className='mx-auto max-w-screen-lg mt-12 p-4'>
        <h1 className='text-2xl font-bold mb-4'>Siz buyurtma qilgan tovarlar</h1>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {cards && cards.map(product => (
            <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <div className="w-52 h-44 relative">
                <img src={product.pic} alt={product.name} className=" h-44 m-auto  object-cover" />
              </div>
              <div className="p-4 flex flex-col">
                <p className="text-lg font-bold mb-2">{product.name}</p>
                <p className="text-sm mb-2">{product.description}</p>
                <div className='flex items-center mb-4'>
                  <p className="text-lg font-semibold mr-4">
                    {product.price && !isNaN(product.price) && (product.price * (product.quantity || 1)).toFixed(2)} so'm
                  </p>
                  <button 
                    onClick={() => handleQuantityChange(product.id, -1)} 
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={product.quantity || 1} 
                    readOnly 
                    className="w-12 text-center mx-2 border border-gray-300 rounded" 
                  />
                  <button 
                    onClick={() => handleQuantityChange(product.id, 1)} 
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)} 
                    className="w-6 h-6 ml-2 transition-transform duration-300 hover:scale-110"
                  >
                    <img src={delete1} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
<div  className=' flex gap-7'>
        <button 
          onClick={handleOrder}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors mt-4"
        >
          Buyurtma berish
        </button>

        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-4"
        >
          Ortga qaytish
        </button>
        </div>
        {orderModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-11/12 sm:w-80">
              <h2 className="text-lg font-bold mb-4">Buyurtma tasdiqlash</h2>
              <form className="mb-4">
                <div className="mb-4">
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Ism</label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block  pl-2  w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="customerPhone" className="block text-sm font-medium  text-gray-700">Telefon raqam</label>
                  <input  
                    type="text"
                    id="customerPhone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="mt-1 pl-2  block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button 
                    type="button"
                    onClick={handleCloseOrderModal}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="button"
                    onClick={sendMessage}
                    disabled={!customerName.trim() || !customerPhone.trim()}
                    className={`py-2 px-4 rounded transition-colors ${customerName.trim() && customerPhone.trim() ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                  >
                    Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
  
      </div>
    </>
  );
}
