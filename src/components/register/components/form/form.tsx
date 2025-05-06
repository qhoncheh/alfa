import { Header, Main, Footer } from "./components";

type FormProps = {
  children?: React.ReactNode;
  onHeaderActionClick?: () => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  text?: string;
  linkText?: string;
  linkAddress?: string;
};

export default function Form({
  children,
  onHeaderActionClick,
  onGoogleLogin,
  onAppleLogin,
  text,
  linkText,
  linkAddress,
}: FormProps) {
  return (
    <div className="flex flex-col w-1/2 h-2/3 justify-center gap-12 items-center">
      <Header onHeaderActionClick={onHeaderActionClick} />

      <Main onAppleLogin={onAppleLogin} onGoogleLogin={onGoogleLogin}>
        {children}
      </Main>

      <Footer linkAddress={linkAddress} text={text} linkText={linkText} />
    </div>
  );
}
