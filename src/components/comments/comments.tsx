import { Header, Carts } from "./components";

export default function Comments() {
  return (
    <div className="flex flex-col w-full  gap-5 overflow-hidden bg-transparent rounded-2xl p-8 border-2 border-dashed border-[#7575FE]">
      <Header />
      <Carts />
    </div>
  );
}
