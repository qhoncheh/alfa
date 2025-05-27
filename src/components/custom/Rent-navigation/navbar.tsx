import React from "react";

const RentNav = () => {
  return (
    <div className="flex flex-row justify-center breadcrumbs text-sm">
      <ul className="text-gray-500">
        <li>
          <a>خانه</a>
        </li>
        <li>
          <a>رهن و اجاره</a>
        </li>
        <li>
          <a> رهن و اجاره آپارتمان</a>
        </li>
        <li className="text-black font-bold">رهن و اجاره آپارتمان رشت</li>
      </ul>
    </div>
  );
};
export default RentNav;
