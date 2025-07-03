import React from "react";

const TaskListNum = ({ taskNumbers }) => {
  return (
    <div className="flex items-center justify-between mt-5 mb-5 gap-5 text-[#fff]">
      <div className="w-[45%] px-5 py-4 rounded-xl bg-green-400">
        <h2 className="text-4xl font-extrabold">{taskNumbers.newTask}</h2>
        <h3 className="text-3xl font-bold">New Task</h3>
      </div>
      <div className="w-[45%] px-5 py-4 rounded-xl bg-yellow-400">
        <h2 className="text-4xl font-extrabold">{taskNumbers.completed}</h2>
        <h3 className="text-3xl font-bold">Completed Task</h3>
      </div>
      <div className="w-[45%] px-5 py-4 rounded-xl bg-blue-400 text-green-900">
        <h2 className="text-4xl font-extrabold">{taskNumbers.active}</h2>
        <h3 className="text-3xl font-bold">Accepted Task</h3>
      </div>
      <div className="w-[45%] px-5 py-4 rounded-xl bg-red-400">
        <h2 className="text-4xl font-extrabold">{taskNumbers.failed}</h2>
        <h3 className="text-3xl font-bold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
