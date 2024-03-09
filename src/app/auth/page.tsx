"use client";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { useState } from "react";

function Auth() {
  const [choose, setChoose] = useState<boolean>(true);
  return (
    <div className="flex h-[90vh]  w-full justify-center items-center flex-col">
      <h1 className=" text-[50px] font-['Righteous',_sans-serif] font-semibold not-italic text-sky-500 mb-[20px]">
        Nuvex
      </h1>
      <div className="flex gap-3 font-bold justify-between w-[80%] mb-4">
        <button
          onClick={() => setChoose(true)}
          className={`border border-zinc-500 py-1 px-3 w-[48%] ${
            choose ? "bg-sky-500 text-white border-none" : ""
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setChoose(false)}
          className={`border border-zinc-500 py-1 px-3 w-[48%] ${
            !choose ? "bg-sky-500 text-white border-none " : ""
          }`}
        >
          Sign up
        </button>
      </div>
      {choose ? <Login /> : <SignUp />}
    </div>
  );
}

export default Auth;
