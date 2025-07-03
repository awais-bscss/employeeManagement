import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 min-w-[250px] w-full sm:w-[25%] p-3 sm:p-5 bg-gray-700 rounded-2xl sm:ml-4">
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
          disabled
          className="bg-blue-500 opacity-50 cursor-not-allowed px-2 text-xs sm:text-sm py-1 rounded"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
