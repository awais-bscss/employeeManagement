import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userType, setUserType] = useState("");
  const [loginUserData, setLoginUserData] = useState(null);
  const data = useContext(AuthContext);

  useEffect(() => {
    if (data) {
      const loginUser = localStorage.getItem("loginUser");
      if (loginUser) {
        const parsedUser = JSON.parse(loginUser);
        setUserType(parsedUser.role);
      }
    }
  }, [data]);

  const handleLogout = () => {
    setUserType("");
    localStorage.removeItem("loginUser");
  };

  const handleLogin = (email, password) => {
    if (
      data &&
      data.admin.find((e) => email === e.email && password === e.password)
    ) {
      setUserType("admin");
      localStorage.setItem("loginUser", JSON.stringify({ role: "admin" }));
    } else if (data) {
      const employee = data.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUserType("employee");
        setLoginUserData(employee);
        localStorage.setItem("loginUser", JSON.stringify({ role: "employee" }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  console.log("userType:", userType);

  return (
    <>
      {!userType && <Login handleLogin={handleLogin} />}

      {userType === "employee" && (
        <EmployeeDashboard handleLogout={handleLogout} data={loginUserData} />
      )}

      {userType === "admin" && (
        <AdminDashboard handleLogout={handleLogout} data={loginUserData} />
      )}
    </>
  );
};

export default App;
