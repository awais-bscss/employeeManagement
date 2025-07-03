import React from "react";

const TaskListNum = ({ taskNumbers }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mt-5 mb-5 gap-4 text-[#fff]">
      <div className="w-full sm:w-[48%] px-4 py-3 rounded-xl bg-green-400">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          {taskNumbers.newTask}
        </h2>
        <h3 className="text-xl sm:text-3xl font-bold">New Task</h3>
      </div>
      <div className="w-full sm:w-[48%] px-4 py-3 rounded-xl bg-yellow-400">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          {taskNumbers.completed}
        </h2>
        <h3 className="text-xl sm:text-3xl font-bold">Completed Task</h3>
      </div>
      <div className="w-full sm:w-[48%] px-4 py-3 rounded-xl bg-blue-400 text-green-900">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          {taskNumbers.active}
        </h2>
        <h3 className="text-xl sm:text-3xl font-bold">Accepted Task</h3>
      </div>
      <div className="w-full sm:w-[48%] px-4 py-3 rounded-xl bg-red-400">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          {taskNumbers.failed}
        </h2>
        <h3 className="text-xl sm:text-3xl font-bold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
