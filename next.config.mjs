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
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/youra-kim-portfolio" : "",
  },
};

export default nextConfig;
