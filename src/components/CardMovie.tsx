import { CardMovie } from "@/interface/CardProps";
import Image from "next/image";

const pathPoster = (path: string) => {
  return `https://media.themoviedb.org/t/p/w220_and_h330_face${path}`;
};
function CardMovie({ data }: CardMovie) {
  return (
    <div className="w-[150px] relative flex flex-col justify-center items-center border ">
      <Image
        src={pathPoster(data.poster_path)}
        alt="movie-poster"
        width={150}
        height={100}
      />
    </div>
  );
}

export default CardMovie;
