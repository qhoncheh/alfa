import { Header, Main } from "./components";

type CarstProps = {
  currentIndex?: number;
};

const Carts = ({ currentIndex }: CarstProps) => {
  return (
    <div className="w- min-h-64  flex flex-col gap-5 p-2 ">
      <Header currentIndex={currentIndex} />
      <Main />
      <div className="flex items-center gap-2">
        <span>{`100،500،000 تومان`}</span>
      </div>
    </div>
  );
};

export default Carts;
