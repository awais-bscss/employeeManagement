import React from "react";

const AllTask = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row font-bold text-lg mb-2 border-b border-gray-700 mt-10">
        <h3 className="w-full md:w-[40%] p-2">Task</h3>
        <h3 className="w-full md:w-[30%] p-2">Employee Name</h3>
        <h3 className="w-full md:w-[30%] p-2">Status</h3>
      </div>
      <div className="flex flex-col md:flex-row font-bold text-lg mb-2 bg-[#405f57] text-[#fff]  ">
        <h3 className="w-full md:w-[40%] p-2">Make a UI Design</h3>
        <h3 className="w-full md:w-[30%] p-2">Awais</h3>
        <h3 className="w-full md:w-[30%] p-2">Pending</h3>
      </div>
    </>
  );
};

export default AllTask;
