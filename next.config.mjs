import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
    silenceDeprecations: [
      'import',              // @import deprecation warnings
      'global-builtin',      // mix(), unit() jaise global functions
      'color-functions',     // red(), green(), blue() color functions
      'if-function',         // Sass if() syntax
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "management.workanthem.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;