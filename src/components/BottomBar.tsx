import { Link, useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

function BottomBar() {
  const { pathname } = useLocation();

  return (
    <footer
      className={`sm:hidden z-10 fixed bottom-[0px]  w-full  h-[70px]  flex justify-around items-center bg-[rgba(152,152,152,0.36)]  [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[8.9px] border-[1px] border-[rgba(152,152,152,0.17)] `}
    >
      <Link to={"/"} className={pathname === "/" ? "text-primary" : ""}>
        <GoHomeFill size={30} />
      </Link>
      <Link
        to={"/search"}
        className={pathname === "/search" ? "text-primary" : ""}
      >
        <IoSearch size={30} />
      </Link>
      <Link
        to={"/myList"}
        className={pathname === "/myList" ? "text-primary" : ""}
      >
        {/* <PiDownloadSimpleBold size={30} /> */}
        <FaBookmark size={25} />
      </Link>
      <Link
        to={"/settings"}
        className={pathname === "/settings" ? "text-primary" : ""}
      >
        <IoSettingsSharp size={29} />
      </Link>
    </footer>
  );
}

export default BottomBar;
