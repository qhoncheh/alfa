import Image from "next/image";
import React from "react";
import Logo from "../../../public/AlFA.svg";
import FootPic1 from "../../../public/footerPic1.png";
import FootPic2 from "../../../public/footerPic2.png";
import FootPic3 from "../../../public/footerPic3.png";
import TextFooter from "./text-footer";

export default function FooterContainer() {
  return (
    <>
      <Image src={Logo.src} alt="Logo" width={96} height={96} bg-white/>
      <TextFooter />
      <div className="flex gap-3">
        <div className="p-2 rounded-2xl bg-black">
          <Image src={FootPic1.src} alt="1" width={48} height={48} />
        </div>
        <div className="p-2 rounded-2xl bg-black">
          <Image src={FootPic2.src} alt="1" width={48} height={48} />
        </div>
        <div className="p-2 rounded-2xl bg-black">
          <Image src={FootPic3.src} alt="1" width={48} height={48} />
        </div>
      </div>
    </>
  );
}
