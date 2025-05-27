import { CSSProperties } from "react";


type Styles = {
  parentClassName?: string;
};
type CartProps = {
  image: string;
  title: string;
  creator: string;
  date: string;
  className?: string;
  style?: CSSProperties;
  styles?: Styles;
};

export default function Cart({
  image,
  title,
  creator,
  date,
  className,
  style,
  styles,
}: CartProps) {
  return (
    <div
      style={{ ...style, backgroundImage: `url(${image})` }}
      className={`w-full h-full   bg-no-repeat bg-cover bg-center  flex-col items-end justify-end gap-6 overflow-hidden flex  ${className}`}
    >
      <div
        className={`w-full h-full flex flex-col justify-end items-center bg-slate-500/30 gap-6 p-8 rounded-2xl ${styles?.parentClassName}`}
      >
        <span className="text-justify">{title}</span>

        <div className="flex items-center gap-2   w-full">
          <div className="w-12 h-12 rounded-full bg-white" />
          <div className="flex flex-col gap-1  ">
            <span>{creator}</span>
            <span className="">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
