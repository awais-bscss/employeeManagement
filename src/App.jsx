import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userType, setUserType] = useState("");
  const [loginUserData, setLoginUserData] = useState(null);
  const { employees, admin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading && employees && admin) {
      const loginUser = localStorage.getItem("loginUser");
      if (loginUser) {
        try {
          const parsedUser = JSON.parse(loginUser);
          setUserType(parsedUser.role);
          setLoginUserData(parsedUser.data);
        } catch (error) {
          localStorage.removeItem("loginUser");
        }
      }
    }
  }, [employees, admin, isLoading]);

  const handleLogout = () => {
    setUserType("");
    setLoginUserData(null);
    localStorage.removeItem("loginUser");
  };

  const handleLogin = (email, password) => {
    if (isLoading) {
      alert("Data is still loading. Please wait.");
      return;
    }

    if (!employees || !admin) {
      alert("Data not loaded. Please try again or refresh the page.");
      return;
    }

    const foundAdmin = admin.find(
      (e) => e.email === email && e.password === password
    );
    if (foundAdmin) {
      setUserType("admin");
      setLoginUserData(foundAdmin);
      localStorage.setItem(
        "loginUser",
        JSON.stringify({ role: "admin", data: foundAdmin })
      );
      return;
    }

    const employee = employees.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUserType("employee");
      setLoginUserData(employee);
      localStorage.setItem(
        "loginUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !userType && <Login handleLogin={handleLogin} />}
      {!isLoading && userType === "employee" && (
        <EmployeeDashboard handleLogout={handleLogout} data={loginUserData} />
      )}
      {!isLoading && userType === "admin" && (
        <AdminDashboard handleLogout={handleLogout} data={loginUserData} />
      )}
    </>
  );
};

export default App;
