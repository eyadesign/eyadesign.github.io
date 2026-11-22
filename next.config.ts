import type { NextConfig } from "next";

// On GitHub Pages a project repo is served from /<repo>, while a
// "<user>.github.io" repo is served from the root. Derive it automatically
// so renaming the repository never breaks asset paths.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isActions = process.env.GITHUB_ACTIONS === "true";
const basePath =
  isActions && repo && !repo.endsWith(".github.io") ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
