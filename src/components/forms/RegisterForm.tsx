import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import Button from "../Button";
import Input from "../Input";

const RegisterForm = () => {
  const { createAccount, errorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState<string | null>(null);
  const [password1, setPassword1] = useState<string | null>(null);
  const [password2, setPassword2] = useState<string | null>(null);
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
        name="password1"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword1(e.target.value)
        }
      />
      <Input
        placeholder="Repeat password"
        label="Repeat Password"
        name="password2"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword2(e.target.value)
        }
      />
      <p className=" text-red-500 font-bold text-sm mt-3">{errorMessage}</p>
      <Button
        label="Register"
        className="my-5 float-right h-auto w-full"
        onClick={() => createAccount(email, password1, password2)}
      />
      <div className="text-center font-base ">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-slate-800">
          Login
        </Link>
        <br />
        <Link to="/reset" className="font-bold text-slate-800">
          Forget password
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
