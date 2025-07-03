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
    <div className="flex items-center justify-center h-screen w-screen bg-[#d8f3dc]">
      <div className="border-2 border-[#2f3e46] rounded-3xl flex items-center justify-center px-10 py-28">
        <form
          className="flex items-center justify-center flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="border-2 border-[#52796f] rounded-full px-3 py-2 outline-none text-[#252f35] bg-transparent placeholder:text-[#2f3e46] focus:placeholder-transparent w-70"
            type="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-[#52796f] rounded-full px-3 py-2 outline-none text-[#252f35] bg-transparent placeholder:text-[#2f3e46] focus:placeholder-transparent w-70"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            type="submit"
            className="rounded-full px-8 py-2 text-white cursor-pointer bg-[#2f3e46] hover:bg-[#405f57] transition-colors duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
