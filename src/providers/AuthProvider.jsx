import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

const updateUser = (updatedData) => {
  if (!auth.currentUser) return Promise.reject(new Error("No current user"));
  return updateProfile(auth.currentUser, updatedData)
    .then(() => auth.currentUser.reload())
    .then(() => {
      setUser({ ...auth.currentUser });
    });
};


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const googleUser = result.user;
      const providerPhoto =
        googleUser?.photoURL || googleUser?.providerData?.[0]?.photoURL || null;
      const providerName =
        googleUser?.displayName ||
        googleUser?.providerData?.[0]?.displayName ||
        null;

      if (auth.currentUser && (providerPhoto || providerName)) {
        await updateProfile(auth.currentUser, {
          displayName: providerName,
          photoURL: providerPhoto,
        });
        await auth.currentUser.reload();
      }

      setUser(auth.currentUser || result.user);
      setLoading(false);
      return result;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authData = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
