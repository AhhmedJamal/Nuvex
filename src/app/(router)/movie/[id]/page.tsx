/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieProps } from "@/interface/MovieProps";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { CardMovieProps } from "@/interface/CardMoviePrpos";
import CardPopular from "@/components/CardPopular";
import { IoCloseCircleSharp } from "react-icons/io5";
function MovieDetails() {
  const params = useParams();
  const [movieVideo, setMovieVideo] = useState<MovieProps | null>(null);
  const [popular, setPopular] = useState<[]>([]);
  const number = params.id as string;
  const numberPart = number.match(/\d+/);
  const numericValue = parseInt(numberPart?.[0] ?? "", 10);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const startDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseDown(true);
    setStartX(e.pageX - (e.currentTarget.offsetLeft || 0));
    setScrollLeft(e.currentTarget.scrollLeft || 0);
  };

  const stopDragging = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!mouseDown) return;
    const x = e.pageX - (e.currentTarget.offsetLeft || 0);
    const scroll = x - startX;
    if (e.currentTarget) {
      e.currentTarget.scrollLeft = scrollLeft - scroll;
    }
  };
  let date: Date;
  if (movieVideo?.release_date) {
    date = new Date(movieVideo?.release_date);
  } else {
    date = new Date();
  }

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  });
  const fetchDataVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${numericValue}?api_key=b9fcb57ad4b325613192f31c8cd77d8c&append_to_response=videos`
    );
    const data = await response.json();
    setMovieVideo(data);
  };
  const getPopular = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b9fcb57ad4b325613192f31c8cd77d8c&language=en-Us&page=7"
    )
      .then((response) => response.json())
      .then((response) => {
        setPopular(response.results);
      })
      .catch((err) => console.error(err));
  };
  const pathPhoto = (path: string | null | undefined) => {
    return `https://image.tmdb.org/t/p/original${path}`;
  };
  const handleClick = () => {
    setShow((pre) => !pre);
  };
  useEffect(() => {
    getPopular();
    fetchDataVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full mb-[60px] h-screen overflow-hidden ">
      <div className="relative ">
        <img
          src={pathPhoto(movieVideo?.backdrop_path)}
          alt="backdrop_path"
          className="w-full object-cover"
        />
        <div className="absolute top-0 flex pl-2 items-center  bg-gradient-to-r from-[#1c1c1c] w-full h-[100%]">
          <img
            src={pathPhoto(movieVideo?.poster_path)}
            alt="poster_path"
            className="w-[30%] rounded-lg "
          />
        </div>

        {show && (
          <div className="fixed top-0 z-10 w-full h-screen  bg-[rgba(33,_33,_33,_0.8)]">
            <div className="p-5 w-full flex justify-end">
              <IoCloseCircleSharp size={45} onClick={handleClick} />
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${movieVideo?.videos.results[0].key}`}
              className={`w-[90%] md:h-[400px] sm:mt-[70px] md:mt-[100px] lg:mt-0 mt-[30px] h-[300px] m-auto`}
              allowFullScreen={true}
            />
          </div>
        )}
      </div>
      <div className="p-2">
        <div className="flex justify-between ">
          <button className="border border-zinc-600 transition-all active:bg-zinc-500 w-[48%] flex justify-center items-center gap-1 py-1  rounded-md text-[12px] font-bold">
            <PiDownloadSimpleBold size={20} />
            Download
          </button>

          <button
            onClick={handleClick}
            className="bg-sky-500 active:bg-sky-300 transition-all w-[48%] flex justify-center items-center gap-1 py-1 rounded-md text-[13px] font-bold"
          >
            <FaPlay size={17} />
            Play
          </button>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-[20px]">{movieVideo?.title}</h1>
          <p className="text-zinc-400 text-[12px] mb-3">
            {movieVideo?.overview}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-bold text-slate-400 mt-1">
            Original Language:{" "}
            <div className="font-normal ">
              {movieVideo?.spoken_languages[0].english_name}
            </div>
          </div>
          <div className="text-slate-400 font-bold text-[14px]">
            Release Date
            <h3 className=" text-[12px] font-normal">{formattedDate}</h3>
          </div>
        </div>
      </div>
      <div className="bg-zinc-700 w-full h-[1px] my-3"></div>
      <h1 className="text-[14px] font-bold mb-2 pl-3">More Like This</h1>
      <div
        className="flex overflow-auto gap-3 containerMovies px-3"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopDragging}
      >
        {popular.map((movie: CardMovieProps) => {
          return (
            <div key={movie.id} className="">
              <CardPopular data={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDetails;
