import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  label: string;
  className: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
}

const Button = ({ label, className, icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-1/2 inline-flex align-middle justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-600 text-2xl font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:ml-3 sm:w-auto sm:text-sm ${className} `}
    >
      <div className="text-base">{label}</div>
      {icon && <div className="ml-2">{icon}</div>}
    </button>
  );
};

export default Button;
