import { ShimmerProps } from "../types/ShimmerProps";

function Shimmer({ width, height }: ShimmerProps) {
  return (
    <div
      className={`overflow-hidden w-[${width}px] h-[${height}px] ${
        width === 0 ? "rounded-none" : "rounded-xl"
      } `}
    >
      <div
        className={`rotate-45  scale-[2] w-[${width}px] h-[${height}px]`}
        style={{
          background:
            "linear-gradient(-90deg, #393939 0%, gray 50%, #393939 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "90% -90%",
          animation: "shimmerAnimation 2.5s infinite",
        }}
      />
    </div>
  );
}

export default Shimmer;
