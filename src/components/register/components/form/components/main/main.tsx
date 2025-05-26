import { Button } from "@/components/custom";
import { GoogleIcon, AppleIcon } from "@/icons";
const classNameBtn = "w-max px-5 sm:px-11";
const classNameLine = "w-full text-[#F0F0F0]";

type MainProps = {
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  children?: React.ReactNode;
};

export default function Main({
  onAppleLogin,
  onGoogleLogin,
  children,
}: MainProps) {
  return (
    <main className="w-full flex flex-col">
      {onAppleLogin && onGoogleLogin && (
        <div className="flex flex-col  gap-3 w-full ">
          <div className="w-full flex items-center justify-between  ">
            <Button className={classNameBtn} onClick={onGoogleLogin}>
              <small>{"ورود با گوگل"}</small>
              <GoogleIcon />
            </Button>
            <Button className={classNameBtn} onClick={onAppleLogin}>
              <small>{"ورود با اپل"}</small>
              <AppleIcon />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <hr className={classNameLine} />
            <small>{"یا"}</small>
            <hr className={classNameLine} />
          </div>
        </div>
      )}

      {children}
    </main>
  );
}
