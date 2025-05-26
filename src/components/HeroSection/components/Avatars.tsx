import Image from "next/image";
import React from "react";

const Avatars = () => {
  return (
    <>
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
              alt="Batman avatar"
              width={50}
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              alt="Spider-Man avatar"
              width={50}
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
              alt="Hulk avatar"
              width={50}
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
              alt="Wonder Woman avatar"
              width={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatars;
