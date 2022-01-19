import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  className?: string;
  register?: any;
}

const Input = ({ placeholder, name, register, label, className }: Props) => {
  return (
    <div className={`w-full flex flex-col gap-1 mt-4 ${className}`}>
      {label && <label className="font-semibold text-gray-600">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2  w-full border-2 rounded-md"
        {...(register && register(name))}
      />
    </div>
  );
};

export default Input;
