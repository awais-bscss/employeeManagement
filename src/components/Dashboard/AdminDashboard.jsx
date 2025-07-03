import React from "react";
import Header from "../layouts/Header";
import CreateTasks from "../layouts/CreateTasks";
import AllTask from "../layouts/AllTask";

const AdminDashboard = ({ handleLogout, data }) => {
  return (
    <div className="min-h-screen w-full bg-[#d8f3dc] overflow-x-hidden px-10">
      <Header handleLogout={handleLogout} userName={data?.name || "Admin"} />
      <div className="max-w-7xl mx-auto">
        <CreateTasks />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
