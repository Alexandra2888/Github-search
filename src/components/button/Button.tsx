import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({type="button"}) => {
  return (
    <button
      type={type}
      className="absolute right-1 top-1 bottom-1 px-3 text-white font-bold text-sm bg-light-blue hover:bg-blue-400 rounded-xl transition-colors duration-300">
      Search
    </button>
  );
};

export default Button;
