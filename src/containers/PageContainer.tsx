import React, { ReactChild } from "react";
import Button from "../components/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
interface Props {
  children: ReactChild;
  title: string;
}

const PageContainer = ({ children, title }: Props) => {
  return (
    <div className="main-content flex flex-col flex-grow p-6">
      <div className="flex flex-row justify-between w-full items-center">
        <h1 className="font-bold text-2xl m-5 text-gray-700">{title}</h1>
        <Button
          label="Create"
          className="m-5"
          icon={<AiOutlinePlusCircle size={24} />}
        />
      </div>

      <div className="flex flex-col flex-grow  bg-white rounded mt-4">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
