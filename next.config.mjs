/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore eslint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  images: {
    unoptimized: true, // Disable image optimization (useful for static hosting)
  },
  experimental: {
    swcMinify: true, // Minify with SWC (faster minification)
  },
  poweredByHeader: false, // Hide the "Powered by Next.js" header
  trailingSlash: true, // Make sure all URLs end with a trailing slash
  reactStrictMode: true, // Enable React Strict Mode for better error handling

};

export default nextConfig;
