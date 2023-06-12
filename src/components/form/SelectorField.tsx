import React from "react";

interface SelectorFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (fieldName: string, value: string) => void;
}

const SelectorField: React.FC<SelectorFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="mb-6 md:flex md:w-[600px] md:items-center">
      <div className="md:w-1/3">
        <label
          className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <select
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectorField;
