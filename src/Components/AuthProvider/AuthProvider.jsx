import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle=()=>{
    return signInWithPopup(auth, provider)

  }

  const AuthInfo = {
    createUser,
    Login,loginWithGoogle
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
