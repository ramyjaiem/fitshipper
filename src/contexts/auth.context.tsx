import React, { createContext, ReactChild } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

interface Props {
  children: ReactChild;
}

interface AuthContextProps {
  login: Function;
  logout: Function;
  user: User | undefined | null;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => console.log(""),
  logout: () => console.log(""),
  user: undefined,
});
const AuthProvider = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const login = () => {
    signInWithEmailAndPassword(auth, "test@test.com", "password");
  };
  const logout = () => {
    signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
