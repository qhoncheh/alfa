import { Images } from "@/components/HotDealsSlider/models";

type SliderProps = {
  current: number;
  images: Images[];
};

export default function Slider({ current, images }: SliderProps) {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-lg">
      {images.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            transform: `translateX(${current * 100}%)`,
          }}
          className="min-w-full h-32   bg-no-repeat bg-cover bg-center  flex-col items-end justify-end gap-6 overflow-hidden flex transition-transform duration-500 ease-in-out"
        />
      ))}
    </div>
  );
}
