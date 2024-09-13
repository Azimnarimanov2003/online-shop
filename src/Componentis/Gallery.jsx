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
  { id: 1, pic: pic1, name: "Caesar", description: "Caesar salad — a delicious salad with chicken and lettuce!", price: 10 },
  { id: 2, pic: pic2, name: "Camera", description: "This is the description of product .", price: 20 },
  { id: 3, pic: pic3, name: "Notebook", description: "This is the description of product .", price: 30 },
  { id: 4, pic: pic4, name: "Carding", description: "This is the description of product .", price: 40 },
  { id: 5, pic: pic5, name: "Car", description: "This is the description of product .", price: 50 },
  { id: 6, pic: pic6, name: "Football Boots", description: "This is the description of product .", price: 60 },
  { id: 7, pic: pic7, name: "Playstation", description: "This is the description of product .", price: 70 },
  { id: 8, pic: pic7, name: "Playstation", description: "This is the description of product .", price: 80 },
];



export default function Gallery() {
 

  return (
    <div className="container max-w-[1200px] mx-auto px-4 pt-4">
      <div className='flex items-center gap-5 text-red-900 mb-6'>
        <img src={red1} alt="redi" className="w-8 h-8" />
        <p className='text-red-900 text-xl'>Categories</p>
      </div>

    

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-7'>
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

    </div>
  );
}
