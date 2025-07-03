import React from "react";
import Header from "../layouts/Header";
import TaskListNum from "../layouts/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data }) => {
  if (!data) {
    return <div>Data not loaded. Please try logging in again.</div>;
  }

  return (
    <div className="p-10 h-screen w-screen bg-[#d8f3dc]">
      <Header handleLogout={handleLogout} userName={data?.name || "User"} />
      <TaskListNum taskNumbers={data?.taskNumbers || {}} />
      <TaskList tasks={data?.tasks || []} />
    </div>
  );
};

export default EmployeeDashboard;
