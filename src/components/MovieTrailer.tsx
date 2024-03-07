import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
function MovieTrailer() {
  return (
    <div className="relative h-[280px] w-full">
      <Image
        width={400}
        height={200}
        src="https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg"
        alt="image"
        className="h-[100%] "
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-zinc-900 w-full h-[240px] flex items-center justify-center ">
        <p className="font-['Madimi_One',_sans-serif] font-normal not-italic text-[30px] text-neutral-200">
          The Good, <br />
          the Bad and the Ugly
        </p>
        <div className="absolute bottom-0 flex items-center justify-around w-full text-[14px] font-bold">
          <button className="flex flex-col justify-center items-center">
            <FiPlus size={24} />
            My List
          </button>
          <button className="flex justify-center items-center active:bg-gray-300 bg-gray-50 transition-all text-black rounded-md w-[120px] h-6 gap-1">
            <FaPlay />
            Play
          </button>
          <button className="flex flex-col justify-center items-center">
            <CiCircleInfo size={24} />
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieTrailer;
