import React from "react";

const CreateTasks = () => {
  return (
    <div className="mt-8">
      <form className="flex w-full flex-nowrap justify-between items-start">
        <div className="w-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskTitle" className="text-lg font-medium">
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              placeholder="Make a UI Design"
              className="p-2 border border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-lg font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="p-2 border border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="assignTo" className="text-lg font-medium">
              Assign To
            </label>
            <input
              type="text"
              id="assignTo"
              placeholder="Enter Employee Name"
              className="p-2 border border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-lg font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="dev, design, etc"
              className="p-2 border border-gray-600 outline-none rounded-md"
            />
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              id="description"
              cols={30}
              rows={10}
              placeholder="Enter task description"
              className="p-2 border border-gray-600 outline-none rounded-md resize-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full px-8 py-2 text-white bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
