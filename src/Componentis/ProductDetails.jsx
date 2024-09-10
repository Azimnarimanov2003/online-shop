import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Componentis/Gallery'; // products ro'yxatini import qilish

export default function ProductDetails() {
  const { id } = useParams(); // Parametrlarni olish
  const product = products.find(p => p.id === parseInt(id)); // Mahsulotni id bo'yicha topish
  const [quantity, setQuantity] = useState(0); // Mahsulot miqdorini saqlash

  if (!product) {
    return <p>Mahsulot topilmadi.</p>;
  }

  const handleIncrement = () => setQuantity(quantity + 1); // Miqdorni oshirish
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0); // Miqdorni kamaytirish

  return (
    <div className="container max-w-[1200px] mx-auto px-4 pt-4 mt-10 pb-10">
      <div className="min-w-full  shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"> 
        <div className="  md: md:h-80 relative ">
          <img
  src={product.pic}
  alt="PS 5"
  class="h-[30rem] md:w-auto w-full object-cover border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-95"
/>

          {/* Rasmga qo'shimcha stil */}
          
        </div>

        <div className="flex flex-col justify-between p-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left capitalize">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2 my-2 text-lg justify-center md:justify-start">
            <span className="flex">
              {/* SVG icon */}
              <svg className="text-yellow-500 h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
              </svg>
            </span>
            <span className="text-gray-500 text-sm">(200 reviews)</span>
          </div>
          <p className="text-2xl lg:text-3xl font-semibold text-secondary text-center md:text-left">
            {product.price} $
          </p>
          <p className="border-b-2 border-gray-600 text-center md:text-left lg:mt-6 mt-3 xl:w-1/2 pb-3 md:pb-6">
            {product.description}
          </p>
          <div className="flex items-center gap-4 my-6">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                className="h-10 w-10 bg-transparent hover:bg-gray-200 hover:text-white transition duration-200 flex items-center justify-center"
                onClick={handleDecrement}
              >
                <span className="text-2xl">-</span>
              </button>
              <div className="px-4 py-2 border-x-2 border-gray-300 font-medium">{quantity}</div>
              <button
                className="h-10 w-10 bg-transparent  hover:bg-gray-50 hover:transition duration-200 flex items-center justify-center"
                onClick={handleIncrement}
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
            <button className="py-2 px-4 bg-secondary  hover:bg-gray-300  text-blck rounded transform transition duration-300">
              Buy now
            </button>
         
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-4 border-2 p-4 rounded-t-lg">
              <div className="text-4xl">
                <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-medium">Return delivery</h5>
                <p className="text-sm">Free 30 Days Delivery Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
