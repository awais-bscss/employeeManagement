import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col md:flex-row font-bold text-lg mb-2 border-b border-gray-700 mt-10">
        <h3 className="w-full md:w-[30%] p-2">Employee Name</h3>
        <h3 className="w-full md:w-[30%] p-2">New Task</h3>
        <h3 className="w-full md:w-[30%] p-2">Active Task</h3>
        <h3 className="w-full md:w-[30%] p-2">Completed</h3>
        <h3 className="w-full md:w-[30%] p-2">Failed</h3>
      </div>
      {employees &&
        employees.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row font-bold text-lg mb-2 bg-[#405f57] text-[#fff]"
          >
            <h3 className="w-full md:w-[30%] p-2 ml-6">{e.name}</h3>
            <h3 className="w-full md:w-[30%] p-2 ml-6">
              {e.taskNumbers.newTask}
            </h3>
            <h3 className="w-full md:w-[30%] p-2 ml-6">
              {e.taskNumbers.active}
            </h3>
            <h3 className="w-full md:w-[30%] p-2 ml-6">
              {e.taskNumbers.completed}
            </h3>
            <h3 className="w-full md:w-[30%] p-2 ml-6">
              {e.taskNumbers.failed}
            </h3>
          </div>
        ))}
    </>
  );
};

export default AllTask;
