import React from "react";

const TaskList = () => {
  return (
    <div
      id="list"
      className="w-full  h-70 rounded-2xl  flex items-center justify-start gap-4 flex-nowrap overflow-x-auto text-[#fff] "
    >
      <div className=" shrink-0  h-[220px] w-[25%] p-5 bg-red-500  rounded-2xl ml-4">
        <div className="flex  justify-between items-center">
          <h3 className="bg-red-900 px-1 text-sm py-0.5 rounded ">High</h3>
          <h4 className="text-sm font-semibold">20 feb 2025</h4>
        </div>
        <h2 className="text-2xl font-bold mt-3">Task 1</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          reprehenderit minima corporis sint fugiat unde!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
