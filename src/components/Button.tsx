import { MouseEventHandler, ReactNode } from "react";

interface Props {
  label: string;
  className?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
}

const Button = ({ label, className, icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex align-middle justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-800 text-2xl font-bold text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500   sm:text-sm ${className} `}
    >
      <div className="text-base">{label}</div>
      {icon && <div className="ml-2">{icon}</div>}
    </button>
  );
};

export default Button;
