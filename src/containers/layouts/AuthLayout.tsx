import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-3xl absolute top-5 left-5 text-gray-500">
        FITSHIPPER
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
