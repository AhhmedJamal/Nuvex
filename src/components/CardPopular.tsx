import { CardMoviePropsD } from "@/interface/MargeInterFace";
import Image from "next/image";
import { useRouter } from "next/navigation";

const pathPoster = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};
function CardMovie({ data }: CardMoviePropsD) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/movie/${data.id}-${data.title.replace(/[\s#-]/g, "_")}`);
      }}
      className="w-[120px] relative flex flex-col justify-center items-center border border-zinc-600 "
    >
      <Image
        src={pathPoster(data.poster_path)}
        alt="movie-poster"
        width={120}
        height={100}
      />
    </button>
  );
}

export default CardMovie;
