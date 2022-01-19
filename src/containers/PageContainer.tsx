import React, { ReactChild, ReactNode } from "react";
interface Props {
  children?: ReactChild;
  title: string;
  action?: ReactNode;
}

const PageContainer = ({ children, title, action }: Props) => {
  return (
    <div className="main-content flex flex-col flex-grow p-6">
      <div className="flex flex-row justify-between w-full items-center">
        <h1 className="font-bold text-2xl m-5 text-gray-700">{title}</h1>
        {action}
      </div>

      {children && (
        <div className="flex flex-col flex-grow  rounded mt-4">{children}</div>
      )}
    </div>
  );
};

export default PageContainer;
