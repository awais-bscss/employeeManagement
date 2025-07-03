import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTasks = () => {
  const { employees, admin, setUserdata, isLoading } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) {
      alert("Data is still loading. Please wait.");
      return;
    }

    if (!employees || employees.length === 0) {
      alert("Employee data not loaded. Please try again.");
      return;
    }

    if (typeof setUserdata !== "function") {
      alert("Internal error: Unable to update tasks.");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = employees.map((emp) => {
      if (assignTo === emp.name) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskNumbers: {
            active: emp.taskNumbers.active,
            newTask: emp.taskNumbers.newTask + 1,
            completed: emp.taskNumbers.completed,
            failed: emp.taskNumbers.failed,
          },
        };
      }
      return emp;
    });

    const employeeExists = employees.some((emp) => emp.name === assignTo);
    if (!employeeExists) {
      alert("No employee found with the name: " + assignTo);
      return;
    }

    try {
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setUserdata({
        employees: updatedEmployees,
        admin: admin,
      });
    } catch (error) {
      alert("Failed to save task. Please try again.");
      return;
    }

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-wrap justify-between items-start"
      >
        <div className="w-full sm:w-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskTitle" className="text-lg font-medium">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              id="taskTitle"
              placeholder="Make a UI Design"
              className="p-2 border border-gray-600 outline-none rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-lg font-medium">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              id="date"
              className="p-2 border border-gray-600 outline-none rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="assignTo" className="text-lg font-medium">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              id="assignTo"
              placeholder="Enter Employee Name"
              className="p-2 border border-gray-600 outline-none rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-lg font-medium">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              placeholder="dev, design, etc"
              className="p-2 border border-gray-600 outline-none rounded-md"
              required
            />
          </div>
        </div>

        <div className="w-full sm:w-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              id="description"
              cols={30}
              rows={10}
              placeholder="Enter task description"
              className="p-2 border border-gray-600 outline-none rounded-md resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`rounded-full px-8 py-2 text-white bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
