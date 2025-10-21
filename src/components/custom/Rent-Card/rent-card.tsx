// pages/index.tsx (or any other page/component)
import React from 'react';
import HotelCard from '.';

const RentCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
      <HotelCard
        hotelName="هتل پارسیان"
        imageUrl="/images/home1.jpg" 
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل اسپیناس"
        imageUrl="/images/home2.jpg" 
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل پارسیان"
        imageUrl="/images/home3.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل اسپیناس"
        imageUrl="/images/home4.jpg"
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل پارسیان"
        imageUrl="/images/home5.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل اسپیناس"
        imageUrl="/images/home6.jpg"
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل پارسیان"
        imageUrl="/images/home7.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
      />
      <HotelCard
        hotelName="هتل اسپیناس"
        imageUrl="/images/home8.jpg"
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={4}
      />
    </div>
  );
};

export default RentCard;