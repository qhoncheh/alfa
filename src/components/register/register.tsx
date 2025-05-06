import { LayoutRegister, Slider } from "./components";

type RegisterProps = {
  children?: React.ReactNode;
  onHeaderActionClick?: () => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  text?: string;
  linkText?: string;
  linkAddress?: string;
};

export default function Register({
  children,
  onAppleLogin,
  onGoogleLogin,
  onHeaderActionClick,
  linkAddress,
  linkText,
  text,
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
      >
        {children}
      </LayoutRegister>
      <Slider />
    </div>
  );
}
