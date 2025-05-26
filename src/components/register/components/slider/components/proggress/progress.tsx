type ProgressProps = {
  progressPercentage: number;
};

export default function Progress({ progressPercentage }: ProgressProps) {
  return (
    <div className=" w-10 h-10 ">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className=" stroke-slate-300"
          stroke-width="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className="text-indigo-500 progress-ring__circle stroke-current"
          stroke-width="10"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dasharray="251.2"
          stroke-dashoffset={251.2 - (251.2 * progressPercentage) / 100}
        ></circle>
      </svg>
    </div>
  );
}
