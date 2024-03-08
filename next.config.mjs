/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.themoviedb.org"],
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
