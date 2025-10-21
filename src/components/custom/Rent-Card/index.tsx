// components/HotelCard.tsx
import React from 'react';
import { Button } from '../Button';

interface HotelCardProps {
  hotelName: string;
  imageUrl: string;
  address: string;
  price: string;
  stars: number;
  moreItem: string;
}

const HotelCard = ({ hotelName, imageUrl, address, price, stars, moreItem }: HotelCardProps) => {
  return (
    <div className="flex w-full max-w-lg mx-auto h-60 bg-black border border-gray-300 shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={hotelName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-6 relative"> 
        <h2 className="text-xl font-bold text-gray-800">{hotelName}</h2>
        <Button className="bg-[#7575FE] text-white px-4 py-1 rounded-full w-fit">
          {stars} ستاره
        </Button>
        <p className="text-gray-600 text-sm">{address}</p>
        <p className="text-lg font-semibold text-green-600">{price}</p>
        <p className="text-md font-semibold cursor-pointer text-[#7575FE] absolute bottom-4 left-4">
          {moreItem}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;