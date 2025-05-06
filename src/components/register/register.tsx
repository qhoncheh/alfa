import { LayoutRegister, Slider } from "./components";

type RegisterProps = {
  children?: React.ReactNode;
  onHeaderActionClick?: () => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  text?: string;
  linkText?: string;
  linkAddress?: string;
  buttonText: string;
};

export default function Register({
  children,
  onAppleLogin,
  onGoogleLogin,
  onHeaderActionClick,
  linkAddress,
  linkText,
  text,
  buttonText,
}: RegisterProps) {
  return (
    <div className="w-full h-full flex">
      <LayoutRegister
        onAppleLogin={onAppleLogin}
        onGoogleLogin={onGoogleLogin}
        onHeaderActionClick={onHeaderActionClick}
        text={text}
        linkAddress={linkAddress}
        linkText={linkText}
        buttonText={buttonText}
      >
        {children}
      </LayoutRegister>
      <Slider />
    </div>
  );
}
