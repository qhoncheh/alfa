import { Form } from "../form";

type LayoutRegisterProps = {
  children?: React.ReactNode;

  onHeaderActionClick?: () => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  text?: string;
  linkText?: string;
  linkAddress?: string;
};

export default function LayoutRegister({
  children,
  onAppleLogin,
  onGoogleLogin,
  onHeaderActionClick,
  text,
  linkAddress,
  linkText,
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
      >
        {children}
      </Form>
    </div>
  );
}
