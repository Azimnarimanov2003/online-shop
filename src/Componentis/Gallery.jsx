import React from 'react';
import red1 from '../images/qizil.png';
import like from '../images/like1.png';
import likeRed from '../images/like-red.png';
import kuz from '../images/kuz.png';
import left from '../images/chapga.png';
import right from '../images/ungga.png';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import pic7 from '../images/pic7.png';
import GalleryItem from './GalleryItem';

export const products = [
  { id: 1, pic: pic1, name: "Sezar", description: "Sezar salati — tovuqli, lattuce va mazali salat!", price: 10 },
  { id: 2, pic: pic2, name: "Kamera", description: "Bu mahsulot 2ning tavsifi.", price: 20 },
  { id: 3, pic: pic3, name: "Notebook", description: "Bu mahsulot 3ning tavsifi.", price: 30 },
  { id: 4, pic: pic4, name: "Carding", description: "Bu mahsulot 4ning tavsifi.", price: 40 },
  { id: 5, pic: pic5, name: "moshina ", description: "Bu mahsulot 5ning tavsifi.", price: 50 },
  { id: 6, pic: pic6, name: "Butsa", description: "Bu mahsulot 6ning tavsifi.", price: 60 },
  { id: 7, pic: pic7, name: "Playstation", description: "Bu mahsulot 7ning tavsifi.", price: 70 },
  { id: 8, pic: pic7, name: "Playstation", description: "Bu mahsulot 8ning tavsifi.", price: 80 },
];



export default function Gallery() {
 

  return (
    <div className="container max-w-[1200px] mx-auto px-4 pt-4">
      <div className='flex items-center gap-5 text-red-900 mb-6'>
        <img src={red1} alt="redi" className="w-8 h-8" />
        <p className='text-red-900 text-xl'>Categories</p>
      </div>

    

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {products.map((product) => (
          <GalleryItem 
            key={product.id}
            pic={product.pic} 
            like={like} 
            likeRed={likeRed} 
            kuz={kuz} 
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>

      <button className="bg-red-500 text-white py-2 px-4 mt-10 mb-5 rounded mx-auto block hover:bg-white hover:text-red-500 transition-colors duration-300">
        View All Products
      </button>
    </div>
  );
}
