import Image from "next/image";
import Pic from "../../../public/ShinyAlpha+10.png";
import { Button } from "../custom";

export default function LandingShinyAlpha() {
  return (
    <div className="w-full relative flex flex-col items-center lg:flex-row gap-6 pr-8">
      <div
        className="w-fit lg:w-1/2 flex flex-col gap-5"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Button
          className="border-1 border-[#7575FE] text-[#7575FE] !w-max bg-black py-6 px-3"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          آلفا درخشان
        </Button>
        <h1
          className="w-fit font-bold text-white text-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <span className="text-white ml-2">+10</span>
          سال سابقه درخشان
        </h1>
        <p
          className="max-w-[46rem] font-normal text-[#555555] text-justify"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          با بیش از ۱۰ سال تجربه در زمینه خرید، فروش و اجاره انواع املاک مسکونی و تجاری، تیم ما توانسته است به صدها مشتری کمک کند تا بهترین تصمیم‌ها را با اطمینان کامل اتخاذ کنند. در طول این سال‌ها، ما با دقت و تخصص کامل بازار املاک را رصد کرده و روش‌های نوین و حرفه‌ای را در ارائه خدمات به کار گرفته‌ایم. مشاوران ما با درک کامل نیازهای مشتریان و ارائه راهکارهای شخصی‌سازی شده، فرایند خرید، فروش و اجاره را ساده و مطمئن کرده‌اند. با بهره‌گیری از تجربه گسترده، دانش به‌روز و ارتباط مستمر با شبکه گسترده‌ای از مالکین و مستاجران، همواره تلاش می‌کنیم بهترین گزینه‌ها را به مشتریان ارائه دهیم و رضایت آن‌ها را در اولویت قرار دهیم. این سابقه درخشان، اعتماد مشتریان و کیفیت بالای خدمات، پایه و اساس فعالیت حرفه‌ای ما در بازار املاک است
        </p>
      </div>

      <div
        className="relative w-full lg:w-1/2 flex justify-center items-center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          className="absolute top-[10%] left-1/2 -z-10 w-[260px] aspect-square bg-[radial-gradient(circle,#FFFFFF_0%,#7575FE_30%,#4545FF_60%,rgba(0,0,0,0)_100%)] blur-[100px] opacity-80"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1000"
        />
        <div
          className="absolute bottom-[10%] left-[10%] -z-10 w-[200px] aspect-square bg-[radial-gradient(circle,#FFFFFF_0%,#9090FF_25%,#6060FF_50%,rgba(0,0,0,0)_100%)] blur-[100px] opacity-70"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
        />
        <Image
          src={Pic}
          alt="Description of image"
          className="w-2/3 aspect-square"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="600"
        />
      </div>
    </div>
  );
}