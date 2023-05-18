import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user,setUser]= useState(null)
   const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle=()=>{
    return signInWithPopup(auth, provider)

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const updateProfileOfUser=(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

  const AuthInfo = {
    createUser,
    Login,loginWithGoogle,logOut,user,updateProfileOfUser
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
