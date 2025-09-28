import React from "react";
import AuthContext from "../contexts/AuthContext.jsx";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const socialSignIn = async (provider) => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result;
    } catch (error) {
      console.error("Social sign-in error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    setUser,
    socialSignIn,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
