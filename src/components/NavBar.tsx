import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../public/icon-logo.png";
function NavBar() {
  return (
    <div className="h-[60px] flex items-center justify-between px-4">
      <div className="flex justify-center items-center gap-2 ">
        <FaUserCircle size={30} />
        <div className="text-[10px] font-bold">
          <div>Hi, Ahmed</div>
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
