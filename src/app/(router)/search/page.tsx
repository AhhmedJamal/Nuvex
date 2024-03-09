"use client";
import CardPopular from "@/components/CardPopular";
import { CardMovieProps } from "@/interface/CardMovieProps";
import ImageMovie from "@/../public/Film rolls-rafiki.svg";
import React, { useState } from "react";
import Image from "next/image";

function Search() {
  const [search, setSearch] = useState<[]>([]);
  const [title, setTitle] = useState<string>("");

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title.replace(
        /\s/g,
        "+"
      )}&api_key=b9fcb57ad4b325613192f31c8cd77d8c`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSearch(data.results);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="p-3 mb-11 ">
      <form
        className="flex justify-between items-center mt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={title}
          className="h-8 w-[70%] bg-zinc-600 outline-none text-white font-bold pl-2"
          required
          onChange={(e) => {
            setTitle(e.target.value);
            fetchData();
          }}
        />
        <button type="submit" className="bg-sky-500 font-bold h-8 w-[28%]  ">
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-3 mt-10 relative">
        {search.length !== 0 ? (
          search.map((movie: CardMovieProps) => (
            <CardPopular key={movie.id} data={movie} />
          ))
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="flex flex-col justify-center items-center w-full absolute  text-neutral-200 font-bold">
            <Image
              src={ImageMovie}
              alt="Image not found Movies"
              className="w-[60%] mt-[30px] m-auto"
            />
            No results Movies !!
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

// api search
// https://api.themoviedb.org/3/search/movie?query=no+way+up&api_key=b9fcb57ad4b325613192f31c8cd77d8c
