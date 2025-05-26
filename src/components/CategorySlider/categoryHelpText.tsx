import React from 'react';
import { Button } from '../custom';

export default function CategoryHelpText() {
  return (
    <div className='flex flex-col gap-4 pr-6'>
      <Button className="text-[#7575FE] hover:bg-white w-max border-1 border-[#7575FE]">دسته بندی</Button>
      <p className="text-3xl font-bold">
        هر ملکی بخوای
        <br />
        اینجا پیدا میشه!
      </p>
      <p className="text-[#555555]">
        با کلیک به روی هر دسته بندی می توانید تمام آگهی
        <br />
        مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید
      </p>
    </div>
  );
}
 