import { Button } from "@/components/custom";
import Link from "next/link";

type FooterProps = {
  children?: React.ReactNode;
  text?: string;
  linkText?: string;
  linkAddress?: string;
};

export default function Footer({ text, linkText, linkAddress }: FooterProps) {
  return (
    <footer className="w-full flex flex-col gap-4 justify-center items-center">
      <Button className="bg-[#7575FE] w-full ">{"ارسال کد تایید"}</Button>
      {text && linkAddress && linkText && (
        <div className="flex items-center gap-1">
          <small> {text}</small>
          <Link href={linkAddress ?? ""} className="text-[#7575FE] text-sm">
            {linkText}
          </Link>
        </div>
      )}
    </footer>
  );
}
