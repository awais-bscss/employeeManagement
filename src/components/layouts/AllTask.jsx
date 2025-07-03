import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (!employees || employees.length === 0) {
    return <div>No employee data available.</div>;
  }

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row font-bold text-sm sm:text-base md:text-lg mb-2 border-b border-gray-700">
        <h3 className="w-full sm:w-[20%] p-2">Employee Name</h3>
        <h3 className="w-full sm:w-[20%] p-2">New Task</h3>
        <h3 className="w-full sm:w-[20%] p-2">Active Task</h3>
        <h3 className="w-full sm:w-[20%] p-2">Completed</h3>
        <h3 className="w-full sm:w-[20%] p-2">Failed</h3>
      </div>
      {employees.map((e) => (
        <div key={e.id} className="mb-4">
          <div className="flex flex-col sm:flex-row font-bold text-sm sm:text-base md:text-lg mb-2 bg-[#405f57] text-[#fff]">
            <h3 className="w-full sm:w-[20%] p-2 sm:pl-6">{e.name}</h3>
            <h3 className="w-full sm:w-[20%] p-2 sm:pl-6">
              {e.taskNumbers.newTask}
            </h3>
            <h3 className="w-full sm:w-[20%] p-2 sm:pl-6">
              {e.taskNumbers.active}
            </h3>
            <h3 className="w-full sm:w-[20%] p-2 sm:pl-6">
              {e.taskNumbers.completed}
            </h3>
            <h3 className="w-full sm:w-[20%] p-2 sm:pl-6">
              {e.taskNumbers.failed}
            </h3>
          </div>
          <div className="mt-2">
            <h4 className="font-bold text-sm sm:text-base">Tasks:</h4>
            {e.tasks.length > 0 ? (
              <div className="flex flex-col gap-2 mt-2">
                {e.tasks.map((task, index) => (
                  <div
                    key={`${task.title}-${task.date}-${index}`}
                    className="p-3 bg-gray-100 rounded-md text-gray-800 text-sm sm:text-base"
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">{task.title}</span>
                      <span className="text-xs sm:text-sm">{task.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm">{task.description}</p>
                    <p className="text-xs sm:text-sm">
                      Category: {task.category}
                    </p>
                    <p className="text-xs sm:text-sm">
                      Status:{" "}
                      {task.newTask
                        ? "New"
                        : task.active
                        ? "Active"
                        : task.completed
                        ? "Completed"
                        : "Failed"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600">No tasks assigned.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
