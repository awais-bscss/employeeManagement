import React, { createContext, useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const data = getStorage();
    setUserdata({ employees: data.employees || [], admin: data.admin || [] });
  }, []);

  useEffect(() => {
    const employees = localStorage.getItem("employees");
    const admin = localStorage.getItem("admin");

    if (!employees || !admin) {
      setStorage(); // call your setStorage function to initialize data
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
