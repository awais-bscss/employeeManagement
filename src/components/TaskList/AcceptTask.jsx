import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, employeeId }) => {
  const { employees, setUserdata, admin } = useContext(AuthContext);

  const handleComplete = () => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task) =>
          task.title === data.title && task.date === data.date
            ? { ...task, active: false, completed: true }
            : task
        );
        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: emp.taskNumbers.active > 0 ? emp.taskNumbers.active - 1 : 0,
            completed: emp.taskNumbers.completed + 1,
          },
        };
      }
      return emp;
    });

    try {
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setUserdata({ employees: updatedEmployees, admin });
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  const handleFail = () => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task) =>
          task.title === data.title && task.date === data.date
            ? { ...task, active: false, failed: true }
            : task
        );
        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: emp.taskNumbers.active > 0 ? emp.taskNumbers.active - 1 : 0,
            failed: emp.taskNumbers.failed + 1,
          },
        };
      }
      return emp;
    });

    try {
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setUserdata({ employees: updatedEmployees, admin });
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  return (
    <div className="shrink-0 min-w-[250px] w-full sm:w-[25%] p-3 sm:p-5 bg-blue-700 rounded-2xl sm:ml-4">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-900 px-1 text-xs sm:text-sm py-0.5 rounded">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm font-semibold">{data.date}</h4>
      </div>
      <h2 className="text-base sm:text-2xl font-bold mt-3">{data.title}</h2>
      <p className="text-xs sm:text-sm mt-1 truncate">{data.description}</p>
      <div className="flex justify-between mt-3 gap-2">
        <button
          onClick={handleComplete}
          className="bg-green-500 cursor-pointer px-2 text-xs sm:text-sm py-1 rounded hover:bg-green-600 transition-colors"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleFail}
          className="bg-red-800 cursor-pointer px-2 text-xs sm:text-sm py-1 rounded hover:bg-red-900 transition-colors"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
