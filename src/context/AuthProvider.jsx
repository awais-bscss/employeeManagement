import React, { createContext, useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState({ employees: [], admin: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const employees = localStorage.getItem("employees");
      const admin = localStorage.getItem("admin");
      if (!employees || !admin) {
        setStorage();
      }

      const data = getStorage();
      setUserdata({ employees: data.employees || [], admin: data.admin || [] });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        employees: userdata.employees,
        admin: userdata.admin,
        setUserdata,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
