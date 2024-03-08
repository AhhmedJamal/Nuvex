/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieProps } from "@/interface/MovieProps";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { CardMovieProps } from "@/interface/CardMoviePrpos";
import CardMovie from "@/components/CardPopular";

function MovieDetails() {
  const params = useParams();
  const [movieVideo, setMovieVideo] = useState<MovieProps | null>(null);
  const [popular, setPopular] = useState<[]>([]);
  const number = params.id as string;
  const numberPart = number.match(/\d+/);
  const numericValue = parseInt(numberPart?.[0] ?? "", 10);
  const date = new Date(movieVideo?.release_date);
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
  const pathPhoto = (path: string) => {
    return `https://image.tmdb.org/t/p/original${path}`;
  };

  useEffect(() => {
    getPopular();
    fetchDataVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full mb-[60px]">
      <div className="relative ">
        <img
          src={pathPhoto(movieVideo?.backdrop_path)}
          alt="backdrop_path"
          className="w-full object-cover"
        />
        <div className="absolute top-0 flex pl-2 items-center  bg-gradient-to-r from-[#1c1c1c] w-full h-full">
          <img
            src={pathPhoto(movieVideo?.poster_path)}
            alt="poster_path"
            className="w-[30%] rounded-lg "
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex justify-between ">
          <button className="border border-zinc-600 transition-all active:bg-zinc-500 w-[48%] flex justify-center items-center gap-1 py-1  rounded-md text-[12px] font-bold">
            <PiDownloadSimpleBold size={20} />
            Download
          </button>
          <button className="bg-sky-500 active:bg-sky-300 transition-all w-[48%] flex justify-center items-center gap-1 py-1 rounded-md text-[13px] font-bold">
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
      <div className="bg-zinc-700 w-full h-[1px] mt-1"></div>
      <div className="grid grid-cols-3 mt-2  place-items-center">
        {popular.map((movie: CardMovieProps) => {
          return (
            <div key={movie.id} className="">
              <CardMovie data={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDetails;

/* <iframe
        src={`https://www.youtube.com/embed/${movie?.key}`}
        className="w-full h-[400px]"
        allowFullScreen={true}

          {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Keg Stand",
      "key": "VQ2XpnUvksw",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip",
      "official": true,
      "published_at": "2024-01-08T22:18:53.000Z",
      "id": "659f584a93828e0125f3678e"
    },
      /> */
