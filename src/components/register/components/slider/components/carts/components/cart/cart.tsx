import { CSSProperties } from "react";

type CartProps = {
  image: string;
  title: string;
  creator: string;
  date: string;
  className?: string;
  style?: CSSProperties;
};

export default function Cart({
  image,
  title,
  creator,
  date,
  className,
  style,
}: CartProps) {
  return (
    <div
      style={{ ...style, backgroundImage: `url(${image})` }}
      className={`w-full h-full   bg-no-repeat bg-cover bg-center  flex-col items-end justify-end gap-6 overflow-hidden flex ${className}`}
    >
      <div
        className={`w-full h-full flex flex-col bg-slate-500/30 justify-end items-center gap-6 p-8 rounded-2xl `}
      >
        <span className="text-justify">{title}</span>

        <div className="flex items-center gap-2   w-full">
          <div className="w-12 h-12 rounded-full bg-white" />
          <div className="flex flex-col gap-1  ">
            <span>{creator}</span>
            <span className="text-[#E5E5E5]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
