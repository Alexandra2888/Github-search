import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({value, onChange}) => {
  return (
    <input
      type="text"
      placeholder="Search GitHub username..."
      className="w-full py-4 pl-12 pr-32 text-sm text-text-primary dark:text-white bg-transparent rounded-2xl focus:outline-none"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
