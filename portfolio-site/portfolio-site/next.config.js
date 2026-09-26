/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Static export can't use Next's image optimization server — Cloudinary
    // already serves optimized images, so this is fine.
    unoptimized: true
  }
};

export default nextConfig;
