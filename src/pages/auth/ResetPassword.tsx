import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";
import { AuthContext } from "../../contexts/auth.context";

interface Props {}

const ResetPassword = (props: Props) => {
  const ResetPasswordForm = () => {
    const { resetPassword, errorMessage } = useContext(AuthContext);
    const [email, setEmail] = useState<string | null>(null);
    return (
      <>
        <Input
          placeholder="Email"
          label="Email"
          name="email"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <p className=" text-red-500 font-bold text-sm mt-3">{errorMessage}</p>
        <Button
          label="Reset Password"
          className="mt-5 float-right h-auto w-full"
          onClick={() => resetPassword(email)}
        />
      </>
    );
  };
  return (
    <AuthLayout>
      <AuthContainer title="Reset Password" form={<ResetPasswordForm />} />
    </AuthLayout>
  );
};

export default ResetPassword;
