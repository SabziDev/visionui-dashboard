import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import simpleHtmlPlugin from "vite-plugin-simple-html";

import pwaConfig from "./src/pwa.js";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    allowedHosts: ["pc-abolfazl"],
  },

  resolve: {
    alias: {
      "@": `${import.meta.dirname}/src`,
      "@public": `${import.meta.dirname}/public`,
    },
  },

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),

    VitePWA(pwaConfig),

    simpleHtmlPlugin({
      minify: true,
    }),
  ],
});
