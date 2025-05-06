import { Form } from "../form";

type LayoutRegisterProps = {
  children?: React.ReactNode;

  onHeaderActionClick?: () => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  text?: string;
  linkText?: string;
  linkAddress?: string;
  buttonText: string;
};

export default function LayoutRegister({
  children,
  onAppleLogin,
  onGoogleLogin,
  onHeaderActionClick,
  text,
  linkAddress,
  linkText,
  buttonText,
}: LayoutRegisterProps) {
  return (
    <div className="w-full h-full border border-blue-500 flex justify-center items-center">
      <Form
        onHeaderActionClick={onHeaderActionClick}
        onGoogleLogin={onGoogleLogin}
        onAppleLogin={onAppleLogin}
        linkAddress={linkAddress}
        text={text}
        linkText={linkText}
        buttonText={buttonText}
      >
        {children}
      </Form>
    </div>
  );
}
