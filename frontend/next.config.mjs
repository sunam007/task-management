/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, //fixes react-paginate layout break on production. https://github.com/AdeleD/react-paginate/issues/501#issuecomment-1756310128
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
