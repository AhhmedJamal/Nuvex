/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { MovieProps } from "@/interface/MovieProps";
import { CardMovieProps } from "@/interface/CardMoviePrpos";
function MovieTrailer() {
  const [upComing, setUpComing] = useState([]);

  const getUpcoming = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b9fcb57ad4b325613192f31c8cd77d8c&language=en-Us&page=2"
    )
      .then((response) => response.json())
      .then((response) => {
        setUpComing(response.results);
      })
      .catch((err) => console.error(err));
  };
  const pathPoster = (path: string) => {
    return `https://image.tmdb.org/t/p/original${path}`;
  };
  useEffect(() => {
    getUpcoming();
  }, []);
  return (
    <div className=" h-[280px]  w-full  sm:mb-[60px] px-3 mb-[25px] ">
      <h1 className="text-[18px] font-bold mb-2">Upcoming</h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        {upComing.map((data: CardMovieProps) => {
          return (
            <div key={data.id} className="relative">
              <img
                src={pathPoster(data.backdrop_path)}
                alt=""
                className="h-[250px] sm:h-[300px] object-cover overflow-hidden"
              />
              <p className="absolute font-['Madimi_One',_sans-serif] font-normal not-italic text-[30px] text-neutral-200 bottom-0 h-[250px] w-full flex items-end bg-gradient-to-t p-2 from-[#1c1c1c]">
                {data.title}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MovieTrailer;

//  const getUpcoming = () => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/upcoming?api_key=b9fcb57ad4b325613192f31c8cd77d8c&language=en-Us&page=1"
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         setUpComing(response.results);
//       })
//       .catch((err) => console.error(err));
//   };

// <div className="p-5 pt-0">
//   <h1 className="text-[18px] font-bold mb-2">Up Coming</h1>
//   <div
//     className="flex overflow-auto gap-3 containerMovies"
//     onMouseDown={startDragging}
//     onMouseUp={stopDragging}
//     onMouseMove={handleMouseMove}
//     onMouseLeave={stopDragging}
//   >
//     {upComing.map((movie: MovieProps) => {
//       return (
//         <div key={movie.id}>
//           <CardMovie data={movie} />
//         </div>
//       );
//     })}
//   </div>
// </div>;
