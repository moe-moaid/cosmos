/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/cosmos" : "",
  assetPrefix: isProd ? "/cosmos/" : "",
  output: "export",
  publicRuntimeConfig: {
    basePath: isProd ? "/cosmos" : "",
  },
};

export default nextConfig;
