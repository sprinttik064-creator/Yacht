import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export served from /Yacht
// (https://<owner>.github.io/Yacht/). Default build stays server-ready for Vercel.
const forPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = forPages
  ? {
      output: "export",
      basePath: "/Yacht",
      assetPrefix: "/Yacht/",
      trailingSlash: true,
    }
  : {};

export default nextConfig;
