import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#d8f3dc] p-4">
      <div className="border-2 border-[#2f3e46] rounded-3xl flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 w-full max-w-xs sm:max-w-sm">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm sm:text-base font-medium text-[#2f3e46]"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="border-2 border-[#52796f] rounded-full px-3 py-2 outline-none text-[#252f35] bg-transparent placeholder:text-[#2f3e46] focus:placeholder-transparent w-full text-xs sm:text-sm"
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm sm:text-base font-medium text-[#2f3e46]"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-[#52796f] rounded-full px-3 py-2 outline-none text-[#252f35] bg-transparent placeholder:text-[#2f3e46] focus:placeholder-transparent w-full text-xs sm:text-sm"
              type="password"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
          <button
            type="submit"
            className="rounded-full px-4 sm:px-6 py-2 text-white cursor-pointer bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300 text-xs sm:text-sm font-medium mt-2"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
