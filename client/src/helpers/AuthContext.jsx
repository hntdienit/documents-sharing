import React, { createContext, useEffect, useState } from "react";
import newRequest from "../utils/newRequest.js" 

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await newRequest.post("/auth/login", inputs);
    setCurrentUser(res.data)
  };

  const logout = async () => {
    const res = await newRequest.post("/auth/logout");
    setCurrentUser(null)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};