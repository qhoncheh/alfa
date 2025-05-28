import Image from "next/image";
import Pic from "../../../public/ShinyAlpha+10.png";
import { Button } from "../custom";

export default function LandingShinyAlpha() {
  return (
    <div className="w-full relative flex flex-col items-center lg:flex-row gap-6 ">
      <div className="w-fit lg:w-1/2 flex flex-col gap-5">
        <Button className=" border-1 border-[#7575FE] text-[#7575FE] !w-max hover:bg-white py-6 px-3">
          آلفا درخشان
        </Button>
        <h1 className="w-fit font-bold text-white text-3xl">
          <span className="text-white ml-2">+10</span>
          سال سابقه درخشان
        </h1>
        <p className="max-w-[46rem] font-normal text-[#555555] text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center items-center ">
        <div className="absolute top-[10%] left-1/2 -z-10 w-[260px] aspect-square bg-[radial-gradient(circle,#FFFFFF_0%,#7575FE_30%,#4545FF_60%,rgba(0,0,0,0)_100%)] blur-[100px] opacity-80" />

        <div className="absolute bottom-[10%] left-[10%] -z-10 w-[200px] aspect-square bg-[radial-gradient(circle,#FFFFFF_0%,#9090FF_25%,#6060FF_50%,rgba(0,0,0,0)_100%)] blur-[100px] opacity-70" />
        <Image
          src={Pic}
          alt="Description of image"
          className="w-2/3 aspect-square"
        />
      </div>
    </div>
  );
}
