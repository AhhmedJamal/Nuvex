"use client";
import React, { useState } from "react";

// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth, db, facebookProvider } from "@/firebase/config";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";
function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passConfirmation, setPassConfirmation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="flex h-[40vh] justify-center items-center flex-col w-full">
      <form className="w-[80%] flex flex-col gap-4">
        <input
          className="bg-zinc-700  shadow appearance-none border border-zinc-500 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="bg-zinc-700 shadow appearance-none border border-zinc-500 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="pass"
          type="password"
          placeholder="Password"
          required
        />
        <input
          className="bg-zinc-700 shadow appearance-none border border-zinc-500 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="passConfirmation"
          type="password"
          placeholder="Password Confirmation"
          required
        />

        <button
          type="submit"
          className="bg-sky-500 text-light rounded-md p-2 font-bold items-center flex justify-center mt-3"
        >
          {loading ? (
            <span className="w-[30px] h-[30px] border-[5px] border-[solid] border-[#FFF] [border-bottom-color:transparent] rounded-[50%] inline-block box-border  animate-spin"></span>
          ) : (
            "Sign up"
          )}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
