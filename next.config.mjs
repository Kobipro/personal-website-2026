/** @type {import('next').NextConfig} */
const nextConfig = {
  // starts here
   typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ends here
};

export default nextConfig;