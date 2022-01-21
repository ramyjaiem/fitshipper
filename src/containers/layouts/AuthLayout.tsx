import React, { ReactChild } from "react";
import AddressesProvider from "../../contexts/addresses.context";
import AuthProvider from "../../contexts/auth.context";

interface Props {
  children: ReactChild;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-3xl -mt-16 mb-5 text-gray-500">
        FITSHIPPER
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
