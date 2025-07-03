import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, employeeId }) => {
  const { employees, setUserdata, admin } = useContext(AuthContext);

  const handleAccept = () => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task) =>
          task.title === data.title && task.date === data.date
            ? { ...task, active: true, newTask: false }
            : task
        );
        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: emp.taskNumbers.active + 1,
            newTask:
              emp.taskNumbers.newTask > 0 ? emp.taskNumbers.newTask - 1 : 0,
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
    <div className="shrink-0 min-w-[250px] w-full sm:w-[25%] p-3 sm:p-5 bg-green-700 rounded-2xl sm:ml-4">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-900 px-1 text-xs sm:text-sm py-0.5 rounded">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm font-semibold">{data.date}</h4>
      </div>
      <h2 className="text-base sm:text-2xl font-bold mt-3">{data.title}</h2>
      <p className="text-xs sm:text-sm mt-1 truncate">{data.description}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={handleAccept}
          className="bg-green-500 cursor-pointer px-2 text-xs sm:text-sm py-1 rounded hover:bg-green-600 transition-colors"
        >
          Accept task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
