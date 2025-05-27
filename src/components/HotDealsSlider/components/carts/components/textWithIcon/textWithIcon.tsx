type TextWithIconProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

export default function TextWithIcon({
  icon,
  text,
  className,
}: TextWithIconProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {icon}
      <small className="text-xs text-slate-100">{text}</small>
    </div>
  );
}
