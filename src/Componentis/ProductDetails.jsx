import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Componentis/Gallery';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false); // Modal holati
  const [name, setName] = useState(''); // Ism
  const [phone, setPhone] = useState(''); // Telefon raqam

  if (!product) {
    return <p>Mahsulot topilmadi.</p>;
  }

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Telegram bot API orqali ma'lumotni yuborish
  const handleSendMessage = async () => {
    // Ism va telefon raqamini tekshirish
    if (!name.trim() || !phone.trim()) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const token = "7038719909:AAFLfoGEFJKATD6KyHwawlKefhPqZIqh2JA"; // O'zingizning Telegram bot tokeningiz
    const chat_id = "7153985176";  // O'zingizning chat ID
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageText = `Buyurtma qilingan mahsulot: ${product.name}\nIsm: ${name}\nTelefon: ${phone}\nMiqdor: ${quantity}`;

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
        alert('Xabar yuborildi!');
        setShowModal(false); // Modalni yopish
        // Qo'shimcha ravishda maydonlarni tozalash mumkin
        setName('');
        setPhone('');
        setQuantity(0);
      } else {
        alert('Xabar yuborishda xato yuz berdi.');
        console.error('Telegram API javobi:', data);
      }
    } catch (error) {
      console.error('Xato:', error);
      alert('Xabar yuborishda xato yuz berdi.');
    }
  };

  return (
    <div className="container max-w-[1200px] mx-auto px-4 pt-4 mt-10 pb-10">
      <div className="min-w-full shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"> 
        <div className="md:h-80 relative">
          <img
            src={product.pic}
            alt={product.name}
            className="h-[30rem] md:w-auto w-full object-cover border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-95"
          />
        </div>

        <div className="flex flex-col justify-between p-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left capitalize">
            {product.name}
          </h3>
       
          <p className="text-2xl lg:text-3xl font-semibold text-secondary text-center md:text-left">
            {product.price} $
          </p>
          <div className="flex items-start gap-4 flex-col  my-6">

          <p className="text-xl md:text-xl ">
            {product.description}
          </p>

        <div className='flex'>

            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button 
                className="h-10 w-10 bg-transparent hover:bg-gray-200 transition duration-200" 
                onClick={handleDecrement}
                aria-label="Decrement"
              >
                -
              </button>
              <div className="px-4 py-2 border-x-2  border-gray-300">{quantity}</div>
              <button 
                className="h-10 w-10 bg-transparent hover:bg-gray-200 transition duration-200" 
                onClick={handleIncrement}
                aria-label="Increment"
              >
                +
              </button>
            </div>


            <button 
              className="py-2 px-4 bg-secondary hover:bg-gray-300 rounded" 
              onClick={() => setShowModal(true)}
            >
              Buy now
            </button>
            </div>


            <div className="mt-8">
  <div className="flex items-center gap-4 border-2 p-4 rounded-t-lg">
    <div className="text-4xl">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
        <path d="M3 9l4 0"></path>
      </svg>
    </div>
    <div>
      <h5 className="font-medium">Free delivery</h5>
      <p className="text-sm">Enter your postal code for Delivery Availability</p>
    </div>
  </div>
  <div className="flex items-center gap-4 border-2 p-4 border-t-0 rounded-b-lg">
    <div className="text-4xl">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
      </svg>
    </div>
    <div>
      <h5 className="font-medium">Return delivery</h5>
      <p className="text-sm">Free 30 Days Delivery Returns</p>
    </div>
  </div>
</div>

            
          </div>

          {/* Modal oynasi */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl mb-4">Buyurtma ma'lumotlarini kiriting</h2>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2 mb-4"
                />
                <input
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2 mb-4"
                />
                <div className="flex justify-end">
                  <button 
                    className="py-2 px-4 bg-blue-500 text-white rounded mr-2" 
                    onClick={handleSendMessage}
                  >
                    Yuborish
                  </button>
                  <button 
                    className="py-2 px-4 bg-gray-300 text-black rounded" 
                    onClick={() => setShowModal(false)}
                  >
                    Bekor qilish
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
