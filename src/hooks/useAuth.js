import { createContext, useContext, useEffect, useState } from "react";
import {
  init,
  logIn as authLogin,
  logOut as authLogout,
  auth,
} from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      // set the user as argument in state
      setUser(user);
    });

    // event handler for hydrating state of login
    auth.on("login", setUser);

    return () => {
      auth.off("login", setUser);
    };
  }, []);

  function logIn() {
    authLogin((user) => {
      // set the user as argument in state
      setUser(user);
    });
  }

  function logOut() {
    authLogout(() => {
      // set the user as undefined
      setUser(undefined);
    });
  }

  const contextValue = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
