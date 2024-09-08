import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryItem = ({ pic, like, likeRed, kuz, id, name, description, price }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();  

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleImageClick = () => {
    navigate(`/productdetails/${id}`);  
  };

  return (
    <li className='w-full max-w-xs h-80 flex flex-col items-center justify-between bg-[#F5F5F5] relative rounded-lg overflow-hidden'>
      <div className='w-full h-56 flex items-center justify-center overflow-hidden'>
        <img 
          src={pic} 
          alt={name} 
          onClick={handleImageClick}  
          className='  w-44 p-4 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer' 


        />
      </div>
      {/* Ma'lumotlar */}
      <div className='p-4 flex flex-col items-center text-center'>
        <h2 className='text-lg md:text-xl font-bold mb-2'>{name}</h2>
        <p className='text-sm md:text-base mb-2'>{description}</p>
        <div className='flex gap-2 items-center'>
          <p className='text-lg font-semibold'>{price}</p>
          <button className='bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors'>Savatga qushish</button>
          
        </div>
      </div>
      
      {/* Like va boshqa ikonalar */}
      <div className='absolute top-2 right-2 flex flex-col gap-2 p-2'>
        <img 
          src={liked ? likeRed : like} 
          alt="like" 
          className='w-5 h-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110' 
          onClick={handleLikeClick} 
        />
        <img 
          src={kuz} 
          alt="kuz" 
          className='w-5 h-5 transition-transform duration-300 ease-in-out hover:scale-110' 
        />
      </div>
    </li>
  );
};

export default GalleryItem;
