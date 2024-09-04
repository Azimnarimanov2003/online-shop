import React, { useState } from 'react';
import red1 from '../images/qizil.png';
import like from '../images/like1.png';
import likeRed from '../images/like-red.png'; // Qizil rangdagi like rasm
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
import pic8 from '../images/pic8.png';

const GalleryItem = ({ pic, like, likeRed, kuz }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <li className='w-full h-60 flex items-center justify-center bg-[#F5F5F5] relative'>
      <img 
        src={pic} 
        alt="picture" 
        className={`w-44 h-auto object-cover ${pic === pic1 ? 'custom-pic1-size' : ''}`} 
      />
      <div className='absolute top-2 right-2 flex flex-col gap-2 p-2'>
        <img 
          src={liked ? likeRed : like} 
          alt="like" 
          className='w-4 h-5 cursor-pointer' 
          onClick={handleLikeClick} 
        />
        <img 
          src={kuz} 
          alt="kuz" 
          className='w-4 h-5' 
        />
      </div>
    </li>
  );
};

export default function Gallery() {
  return (
    <div className="container max-w-[1200px] mx-auto px-4">
      <div className='flex items-center gap-5 text-red-900 mb-6'>
        <img src={red1} alt="redi" className="w-8 h-8" />
        <p className='text-red-900 text-xl'>Categories</p>
      </div>

      <div className='flex justify-between gap-5 mb-6'>
        <img src={left} alt="left" className="w-8 h-8 cursor-pointer" />
        <img src={right} alt="right" className="w-8 h-8 cursor-pointer" />
      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {[pic7, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map((pic, index) => (
          <GalleryItem 
            key={index}
            pic={pic} 
            like={like} 
            likeRed={likeRed} 
            kuz={kuz} 
          />
        ))}
      </ul>
    </div>
  );
}
