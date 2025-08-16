/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // exportar HTML estático
  basePath: isProd ? "/app-heroui" : "",
  assetPrefix: isProd ? "/app-heroui/" : "",
  trailingSlash: true, // importante para gh-pages
};

module.exports = nextConfig;
