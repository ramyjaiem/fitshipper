import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";
import { AuthContext } from "../../contexts/auth.context";

interface Props {}

const Login = (props: Props) => {
  const LoginForm = () => {
    const { login, errorMessage } = useContext(AuthContext);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
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
        <Input
          placeholder="Password"
          label="Password"
          name="password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <p className=" text-red-500 font-bold text-sm mt-3">{errorMessage}</p>
        <Button
          label="Login"
          className="mt-5 float-right h-auto w-full"
          onClick={() => login(email, password)}
        />
      </>
    );
  };
  return (
    <AuthLayout>
      <AuthContainer title="Login" form={<LoginForm />} />
    </AuthLayout>
  );
};

export default Login;
