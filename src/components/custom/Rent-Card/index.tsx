// components/HotelCard.tsx
import React from 'react';
import { Button } from '../Button';

interface HotelCardProps {
  hotelName: string;
  imageUrl: string;
  address: string;
  price: string;
  stars: number;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotelName, imageUrl, address, price, stars }) => {
  return (
    <div className="flex w-lg mx-auto h-60 bg-black border-1 border-gray-300 shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={hotelName}
          className="w-full h-full object-cover"
        />
      </div> 
           <div className="flex-1 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{hotelName}</h2>
        <Button className="bg-blue-500 text-white px-4 py-1 rounded-md mb-2">
          {stars} ستاره
        </Button>
        <p className="text-gray-600 text-sm mb-2">{address}</p>
        <p className="text-lg font-semibold text-green-600">{price}</p>
      </div>
    </div>
  );
};

export default HotelCard;