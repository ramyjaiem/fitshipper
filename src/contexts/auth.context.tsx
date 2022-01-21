import { createContext, ReactChild, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOASTER_SETTINGS } from "../utils/constants";

interface Props {
  children: ReactChild;
}

interface AuthContextProps {
  login: Function;
  logout: Function;
  createAccount: Function;
  user: User | undefined | null;
  errorMessage: string | null;
  loading: boolean;
  resetPassword: Function;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => console.log(""),
  createAccount: () => console.log(""),
  logout: () => console.log(""),
  resetPassword: (email: string) => console.log(email),
  user: undefined,
  errorMessage: null,
  loading: true,
});
const AuthProvider = ({ children }: Props) => {
  const [user, loading] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  // clear error message
  useEffect(() => {
    return () => setErrorMessage(null);
  }, []);

  // login user function
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          navigate("/home");
          toast.success("You are logged In !", TOASTER_SETTINGS);
        }
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            setErrorMessage("Invalid email");
            break;
          case "auth/wrong-password":
            setErrorMessage("Wrong email or password");
            break;
          case "auth/user-not-found":
            setErrorMessage("Wrong email or password");
            break;
        }
      });
  };
  // create new user function
  const createAccount = (
    email: string,
    password1: string,
    password2: string
  ) => {
    if (password1 !== password2) {
      setErrorMessage("Password must be the same");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password1)
      .then(() => {
        navigate("/login");
        toast.success("User created !", TOASTER_SETTINGS);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setErrorMessage("Invalid email or password");
            break;
        }
      });
  };

  const logout = () => {
    signOut(auth);
  };
  const resetPassword = async (email: string) => {
    sendPasswordResetEmail(auth, email).then(() => {
      navigate("/login");
      toast.success(
        "Please check your email to reset your password !",
        TOASTER_SETTINGS
      );
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        createAccount,
        user,
        logout,
        errorMessage,
        loading,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
