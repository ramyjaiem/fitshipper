import React, { ReactChild } from "react";

interface Props {
  title: string;
  form: ReactChild;
}

const AuthContainer = ({ title, form }: Props) => {
  return (
    <div className="w-1/3 h-auto bg-white border-2 border-gray-200 rounded-md p-10">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      {form}
    </div>
  );
};

export default AuthContainer;
