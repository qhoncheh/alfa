import { LayoutRegister, Slider } from "./components";

export default function Register() {
  return (
    <div className="w-full h-full border border-red-500 flex ">
      <LayoutRegister />
      <Slider />
    </div>
  );
}
