import React, { useEffect } from "react";
import { fakeAuthProvider } from "../auth";
import { AuthContext } from "./AuthContext";

// This provider is in it's own file to support vite's HMR
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  useEffect(() => {
    console.log("AuthProvider: user", user);
  }, [user]);

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
