import Link from "next/link";

type LinkProps = {
  onClick: () => void;
  link: string;
  text: string;
  isActive?: boolean;
};

export default function CustomLink({
  link,
  text,
  onClick,
  isActive,
}: LinkProps) {
  return (
    <Link
      onClick={onClick}
      className={`bg-slate-800 text-slate-100 w-32 flex justify-center items-center py-3 px-5 rounded-full duration-300 ${
        isActive && "!bg-[#7575FE]"
      }`}
      href={link}
    >
      {text}
    </Link>
  );
}
