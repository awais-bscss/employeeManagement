import React from "react";
import Header from "../layouts/Header";
import TaskListNum from "../layouts/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className="p-10 h-screen w-screen bg-[#d8f3dc]">
      <Header handleLogout={handleLogout} data={data} />
      <TaskListNum />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
