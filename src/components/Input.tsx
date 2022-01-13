import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  placeholder: string;
  name: string;
  register: any;
}

const Input = ({ placeholder, name, register }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1 mt-4">
      <label className="font-semibold text-gray-600">{placeholder}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-50 w-full border-2 rounded-md"
        {...register(name)}
      />
    </div>
  );
};

export default Input;
