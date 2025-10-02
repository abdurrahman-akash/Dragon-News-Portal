import React from "react";
import AuthContext from "../contexts/AuthContext.jsx";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with true for initial auth check

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set to false after auth state is determined
    });
    return () => unsubscribe();
  }, []);

  const registerUser = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const socialSignIn = async (provider) => {
    setLoading(true);
    return await signInWithPopup(auth, provider);
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = async () => {
    setLoading(true);
    return await signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    socialSignIn,
    registerUser,
    loginUser,
    logoutUser,
    loading,
    setLoading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
