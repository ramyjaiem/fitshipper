import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import Button from "../Button";
import Input from "../Input";

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
        className="my-5 float-right h-auto w-full"
        onClick={() => resetPassword(email)}
      />
      <div className="text-center font-base ">
        Already have an account ?{" "}
        <Link to="/login" className="font-bold text-slate-800">
          Login
        </Link>
        <br />
      </div>
    </>
  );
};

export default ResetPasswordForm;
