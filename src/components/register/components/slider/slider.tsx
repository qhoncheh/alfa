import home1 from "@/images/home1.jpg";
import { Action } from "./components";

export default function Slider() {
  return (
    <div className="w-full hidden h-full  sm:flex p-3 relative">
      <div
        style={{ backgroundImage: `url(${home1.src})` }}
        className="w-full h-full  rounded-2xl bg-no-repeat bg-cover bg-center flex flex-col items-end justify-end p-8 gap-6"
      >
        <span>{`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی`}</span>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white" />
            <div className="flex flex-col gap-1  ">
              <span>{`پارسا آقایی`}</span>
              <span className="text-[#E5E5E5]">{`12 مرداد 1403`}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 absolute left-10">
            <Action isRotate />
            <Action />
          </div>
        </div>
      </div>
    </div>
  );
}
