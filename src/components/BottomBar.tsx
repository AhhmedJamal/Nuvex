"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
function BottomBar() {
  const pathname = usePathname();
  const router = useParams();

  return (
    <div className=" sm:hidden z-10 fixed w-full h-[60px] bg-[#1c1c1c] bottom-[-1px] flex justify-around items-center [box-shadow:0px_-1px_10px_0px_rgba(22,_22,_22,_1)] border-t border-zinc-800">
      <Link href={"/"} className={pathname === "/" ? "text-sky-500" : ""}>
        <GoHomeFill size={30} />
      </Link>
      <Link
        href={"/search"}
        className={pathname === "/search" ? "text-sky-500" : ""}
      >
        <IoSearch size={30} />
      </Link>
      <Link
        href={"/download"}
        className={pathname === "/download" ? "text-sky-500" : ""}
      >
        <PiDownloadSimpleBold size={30} />
      </Link>
      <Link
        href={"/profile"}
        className={pathname === "/profile" ? "text-sky-500" : ""}
      >
        <FaUserCircle size={30} />
      </Link>
    </div>
  );
}

export default BottomBar;
