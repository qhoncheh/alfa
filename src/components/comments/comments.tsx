import { Header, Carts } from "./components";

export default function Comments() {
  return (
    <div className="flex flex-col w-full  gap-5 overflow-hidden dark:bg-white bg-transparent rounded-4xl p-8">
      <Header />
      <Carts />
    </div>
  );
}
