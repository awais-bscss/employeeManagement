import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between  ">
      <h1 className="text-2xl font-bold text-[#2f3e46]">
        Hello <br /> <span className="text-3xl font-bold"> Awais 👋</span>
      </h1>
      <button className=" rounded-full px-8 py-2  text-white  cursor-pointer bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300">
        Log out
      </button>
    </div>
  );
};

export default Header;
