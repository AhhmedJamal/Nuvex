"use client";
import { FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { UserData } from "@/interface/UserProps";
function NavBar() {
  const [user, setUser] = useState<[]>([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return (
    <div className="h-[60px] flex items-center justify-between px-4 ">
      <div className="flex justify-center items-center gap-2 ">
        {user.photoURL === null ? (
          <FaUserCircle size={30} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.photoURL}
            alt="photo user"
            className="w-[35px] rounded-full"
          />
        )}

        <div className="text-[10px] font-bold">
          <div>Hi, {user.displayName}</div>
          <div>Welcome Back</div>
        </div>
      </div>
      <h2 className="text-[25px] font-['Righteous',_sans-serif] font-semibold not-italic text-sky-500 ">
        NUVEX
        {/* <Image src={logo} width={120} alt="Logo" /> */}
      </h2>
    </div>
  );
}

export default NavBar;
