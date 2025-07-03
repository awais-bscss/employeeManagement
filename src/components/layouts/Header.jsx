import React from "react";

const Header = ({ handleLogout, userName }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-xl sm:text-2xl font-bold text-[#2f3e46]">
        Hello <br />{" "}
        <span className="text-2xl sm:text-3xl font-bold">{userName}👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="rounded-full px-4 sm:px-8 py-2 text-white cursor-pointer bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
