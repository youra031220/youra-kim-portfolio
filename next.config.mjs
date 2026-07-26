const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/youra-kim-portfolio" : "",
  assetPrefix: isGitHubPages ? "/youra-kim-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
