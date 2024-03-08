import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
function BottomBar() {
  return (
    <div className="fixed w-full h-[60px] bg-[#1c1c1c] bottom-[-1px] flex justify-around items-center shadow-2xl">
      <Link href={""}>
        <GoHomeFill size={30} />
      </Link>
      <Link href={""}>
        <IoSearch size={30} />
      </Link>
      <Link href={""}>
        <MdFileDownload size={30} />
      </Link>
      <Link href={""}>
        <FaUserCircle size={30} />
      </Link>
    </div>
  );
}

export default BottomBar;
