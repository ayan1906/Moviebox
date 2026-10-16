import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

import { auth, googleProvider } from "../config/firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. Google দিয়ে এক ক্লিকে লগইন
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUpWithEmail = async (name, email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email.trim(), password);
  if (name) {
    await updateProfile(res.user, { displayName: name });
    setUser({ ...res.user, displayName: name });
  }
  return res;
};

  // ৩. Email ও Password দিয়ে লগইন (Sign In)
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ৪. লগআউট (Logout)
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, googleSignIn, signUpWithEmail, loginWithEmail, logOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);