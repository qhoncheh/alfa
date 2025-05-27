import React from 'react'
import StatCard from './Cards'

const TextHero = () => {
  return (
    <div className=" h-full w-full text-white  flex flex-col items-center">
      <div className="w-full flex justify-end flex-col">
        <h4 className="md:text-4xl text-2xl pr-8 pt-6">
          خانه ای که میخوای،
          <br />
          جایی که میخوای
        </h4>
        <p className="text-[#767676] md:text-lg text-sm pr-8 pt-4">
          {" "}
          رزرو ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون
          <br />
          مثل آب خوردن فقط در دلتا
        </p>
      </div>
      <div>
        <StatCard />
      </div>
    </div>
  );
}

export default TextHero