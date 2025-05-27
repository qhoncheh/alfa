import { Button } from "@/components/custom";
import { ArrowIcons } from "@/icons";

type ActionsProps = {
  isRotate?: boolean;
  onClick?: () => void;
};

export default function Actions({ isRotate, onClick }: ActionsProps) {
  return (
    <Button
      onClick={onClick}
      className="flex justify-center items-center !w-10 !h-10 bg-[#F9F9F9] rounded-full !p-0"
    >
      <ArrowIcons className={`${isRotate && "-rotate-180"} `} />
    </Button>
  );
}
