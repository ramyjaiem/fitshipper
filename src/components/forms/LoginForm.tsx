import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import Button from "../Button";
import Input from "../Input";

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
        className="my-5 float-right h-auto w-full"
        onClick={() => login(email, password)}
      />
      <div className="text-center font-base ">
        {`Don't have an account? `}
        <Link to="/register" className="font-bold text-slate-800">
          Register
        </Link>
        <br />
        <Link to="/reset" className="font-bold text-slate-800">
          Forget password
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
