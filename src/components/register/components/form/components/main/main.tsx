import { Button } from "@/components/custom";
import { GoogleIcon, AppleIcon } from "@/icons";
const classNameBtn = "w-max px-11";
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
    <main className="w-full flex flex-col gap-6">
      {onAppleLogin && onGoogleLogin && (
        <>
          <div className="w-full flex items-center justify-between overflow-hidden ">
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
        </>
      )}

      {children}
    </main>
  );
}
