import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 h-[260px] w-[25%] p-5 bg-green-700 rounded-2xl ml-4">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-900 px-1 text-sm py-0.5 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm font-semibold">{data.date}</h4>
      </div>
      <h2 className="text-2xl font-bold mt-3">{data.title}</h2>
      <p className="text-sm mt-1">{data.description}</p>
      <div className="flex justify-between mt-3">
        <button className="bg-green-500 cursor-pointer px-2 text-sm py-1 rounded">
          Accept task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
