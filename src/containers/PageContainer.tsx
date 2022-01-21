import React, { ReactChild, ReactNode } from "react";
interface Props {
  children?: ReactChild;
  title: string;
  action?: ReactNode;
  className?: string;
}

const PageContainer = ({ children, title, action, className }: Props) => {
  return (
    <div
      className={`main-content flex flex-col flex-grow py-6 px-12 ${className}`}
    >
      <div className="flex flex-row justify-between w-full items-center mt-5">
        <h1 className="font-bold text-2xl  text-gray-700">{title}</h1>
        {action}
      </div>

      {children && (
        <div className="flex flex-col flex-grow  rounded ">{children}</div>
      )}
    </div>
  );
};

export default PageContainer;
