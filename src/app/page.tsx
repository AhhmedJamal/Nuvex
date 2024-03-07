/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Card from "@/components/CardTV";
import { TvShowProps } from "@/interface/TvProps";
import { MovieProps } from "@/interface/MovieProps";
import { useEffect, useState } from "react";
import CardMovie from "@/components/CardMovie";
import CardTv from "@/components/CardTV";
import NavBar from "@/components/NavBar";
import MovieTrailer from "@/components/MovieTrailer";
export default function Home() {
  const [tv, setTv] = useState([]);
  const [movies, setMovies] = useState([]);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

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
  const getTv = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=b9fcb57ad4b325613192f31c8cd77d8c&&language=en-Us&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        setTv(response.results);
      })
      .catch((err) => console.error(err));
  };
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b9fcb57ad4b325613192f31c8cd77d8c&language=en-Us&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTv();
    getMovies();
  }, []);

  return (
    <main>
      <NavBar />
      <MovieTrailer/>
      <div className="p-5">
        <h1 className="text-[18px] font-bold mb-2">Popular on Nuvex</h1>
        <div
          className="flex overflow-auto gap-3 "
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleMouseMove}
          onMouseLeave={stopDragging}
        >
          {movies.map((movie: MovieProps) => {
            return (
              <div key={movie.id}>
                <CardMovie data={movie} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-[18px] font-bold mb-2">TV Dramas</h1>
        <div
          className="flex overflow-auto gap-3 "
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleMouseMove}
          onMouseLeave={stopDragging}
        >
          {tv.map((tv: TvShowProps) => {
            return (
              <div key={tv.id}>
                <CardTv data={tv} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

// api movies
// https://api.themoviedb.org/3/movie/popular?api_key=b9fcb57ad4b325613192f31c8cd77d8c
