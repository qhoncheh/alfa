
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
        moreItem='مشاهده بیشتر '

      />
      <HotelCard
        hotelName="هتل اسپیناس"
        imageUrl="/images/home2.jpg" 
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={3}
        moreItem='مشاهده بیشتر '

      />
      <HotelCard
        hotelName="هتل پارسی"
        imageUrl="/images/home3.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
        moreItem='مشاهده بیشتر '
      />
      <HotelCard
        hotelName="هتل پلاس"
        imageUrl="/images/home4.jpg"
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={3}
        moreItem="مشاهده بیشتر"
      />
      <HotelCard
        hotelName="هتل الغدیر"
        imageUrl="/images/home5.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={4}
        moreItem="مشاهده بیشتر"
      />
      <HotelCard
        hotelName="هتل ولیعصر"
        imageUrl="/images/home1.jpg"
        address="تهران، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={5}
        moreItem="مشاهده بیشتر"
      />
      <HotelCard
        hotelName="هتل تابان"
        imageUrl="/images/home2.jpg"
        address="تهران، خیابان ولیعصر، پلاک ۱۲۳"
        price="۲,۵۰۰,۰۰۰ تومان"
        stars={2}
        moreItem="مشاهده بیشتر"
      />
      <HotelCard
        hotelName="هتل جمشیدی"
        imageUrl="/images/home2.jpg"
        address="رشت، بلوار کشاورز، پلاک ۴۵۶"
        price="۳,۲۰۰,۰۰۰ تومان"
        stars={4}
        moreItem="مشاهده بیشتر"
      />
    </div>
  );
};

export default RentCard;