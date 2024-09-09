// Korzinka.js
import React, { useState, useEffect } from 'react';
import usesharedStore from './Store/Store';

export default function Korzinka() {
  const { cards, setCards } = usesharedStore();
  const [orderModalOpen, setOrderModalOpen] = useState(false); // Modal holati
  const [customerName, setCustomerName] = useState(''); // Buyurtmachi ismi
  const [customerPhone, setCustomerPhone] = useState(''); // Buyurtmachi telefon raqami

  useEffect(() => {
    // Har safar cards o'zgarganda itemsCountni yangilash
  }, [cards]);

  const handleDelete = (id) => {
    setCards(cards.filter(product => product.id !== id));
  };

  const handleOrder = () => {
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    // Reset customer info
    setCustomerName('');
    setCustomerPhone('');
  };

  const handleOrderSubmit = () => {
    if (customerName.trim() && customerPhone.trim()) {
      alert(`Buyurtma berildi!\nIsm: ${customerName}\nTelefon raqam: ${customerPhone}`);
      handleCloseOrderModal(); // Modalni yopish
    } else {
      alert('Iltimos, barcha maydonlarni to\'ldiring.');
    }
  };

  return (
    <>
      <div className='mx-auto max-w-[1200px]'>
        <h1>Siz buyurtma qilgan tovarlar</h1>
        {cards && cards.map(product => (
          <div key={product.id} className="w-80 h-60 mt-4 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-4">
            <div className="md:w-80 md:h-80">
              <img src={product.pic} alt={product.name} className="w-32 h-36 object-cover m-4" />
            </div>
            <div className="p-1 md:p-6 flex flex-col justify-between h-7">
              <h6 className="text-sm md:text-xl font-bold mb-4">{product.name}</h6>
              <p className="text-lg md:text-lg mb-4">{product.description}</p>
              <p className="text-xs md:text-xl font-semibold mb-4">{product.price} USD</p>
              <button 
                onClick={() => handleDelete(product.id)} 
                className="bg-red-500 text-white px-0 rounded hover:bg-red-600 transition-colors">
                Delete
              </button>
            </div>
          </div>
        ))}

        <button 
          onClick={handleOrder}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors mt-4"
        >
          Buyurtma berish
        </button>

        {/* Buyurtma berish modal */}
        {orderModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80">
              <h2 className="text-lg font-bold mb-4">Buyurtma tasdiqlash</h2>
              <form className="mb-4">
                <div className="mb-4">
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Ism</label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Telefon raqam</label>
                  <input
                    type="text"
                    id="customerPhone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button 
                    type="button"
                    onClick={handleCloseOrderModal}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    Yopish
                  </button>
                  <button 
                    type="button"
                    onClick={handleOrderSubmit}
                    disabled={!customerName.trim() || !customerPhone.trim()} // Tugmani faollashtirish
                    className={`py-2 px-4 rounded transition-colors ${customerName.trim() && customerPhone.trim() ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                  >
                    Buyurtma berish
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
