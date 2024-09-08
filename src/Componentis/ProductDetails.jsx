import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Componentis/Gallery'; // products ro'yxatini import qilish

export default function ProductDetails() {
  const { id } = useParams(); // Parametrlarni olish
  const product = products.find(p => p.id === parseInt(id)); // Mahsulotni id bo'yicha topish
console.log(product)
  if (!product) {
    return <p>Mahsulot topilmadi.</p>;
  }

  return (
    <div className="container max-w-[1200px] mx-auto px-4 pt-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full h-80 md:w-80 md:h-80">
          <img src={product.pic} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between">
          <h1 className="text-xl md:text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-base md:text-lg mb-4">{product.description}</p>
          <p className="text-lg md:text-xl font-semibold mb-4">{product.price}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Savatga qushish</button>
        </div>
      </div>
    </div>
  );
}
