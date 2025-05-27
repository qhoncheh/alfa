interface SelectProps {
  label?: string;
  options: string[];
  defaultText: string;
  className?: string;
  icon?: React.ReactNode;
  selectClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  defaultText,
  className = "",
  icon,
  selectClassName = "",
}) => {
  return (
    <div className={`form-control ${className}`}>
      {label && <label className="label text-black font-semibold">
        <span className="label-text">{label}</span>
      </label>}

      <div className="relative bg-[#F9F9F9]">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
        <select
  className={`select  pl-${icon ? "10" : "4"} rounded-full mt-2 text-gray-400 
              focus:outline-none focus:ring-0 focus:border-gray-300  ${selectClassName}`}
  defaultValue={defaultText}
>
          <option disabled>{defaultText}</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
