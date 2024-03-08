import { CardTv } from "@/interface/CardProps";
import { TvShowProps } from "@/interface/TvProps";
import Image from "next/image";

const pathPoster = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};
function CardTv({ data }: CardTv) {
  return (
    <div className="w-[120px] relative flex flex-col justify-center items-center border border-zinc-600 ">
      <Image
        src={pathPoster(data.poster_path)}
        alt="movie-poster"
        width={120}
        height={100}
      />
    </div>
  );
}

export default CardTv;
