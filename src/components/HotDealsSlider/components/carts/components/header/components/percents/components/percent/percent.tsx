type PercentProps = {
  children: React.ReactNode;
  className?: string;
};

const Percent = ({ children, className }: PercentProps) => {
  return (
    <div
      className={`${className} px-2 py-0.5 rounded-2xl text-sm flex items-center gap-1`}
    >
      {children}
    </div>
  );
};

export default Percent;
