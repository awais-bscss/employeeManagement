import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 min-w-[250px] w-full sm:w-[25%] p-3 sm:p-5 bg-red-600 rounded-2xl sm:ml-4">
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
          className="bg-yellow-500 opacity-50 cursor-not-allowed px-2 text-xs sm:text-sm py-1 rounded"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
