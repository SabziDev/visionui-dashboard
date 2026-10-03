/* eslint-disable camelcase */
/* eslint-disable custom/sort-object-props */

import { API_BASE_URL } from "./data/constants.js";

const createUrlPattern = (baseUrl) => {
  const escapedUrl = baseUrl.replaceAll(/[$(-+.?[-^{|}]/g, String.raw`\$&`);

  return new RegExp(`^${escapedUrl}/.*$`);
};

const createAssetsRoute = (name, fileExtensions, maxEntries) => ({
  urlPattern: new RegExp(String.raw`\.(?:${fileExtensions.join("|")})$`, "i"),
  handler: "CacheFirst",
  options: {
    cacheName: `${name}-runtime-cache`,
    expiration: {
      maxEntries,
    },
  },
});
const createApiRoute = (method) => ({
  urlPattern: createUrlPattern(API_BASE_URL),
  handler: method === "GET" ? "NetworkFirst" : "NetworkOnly",
  method,
  options:
    method === "GET"
      ? {
          cacheName: "api-runtime-cache",
        }
      : {
          backgroundSync: {
            name: `api-${method.toLowerCase()}-queue`,
            options: {
              maxRetentionTime: 24 * 60,
            },
          },
        },
});

/** @type {import("vite-plugin-pwa").VitePWAOptions} */
const pwaConfig = {
  registerType: "autoUpdate",

  manifest: {
    id: "/",
    scope: "/",
    start_url: "/",
    dir: "ltr",
    lang: "en",
    display: "standalone",
    short_name: "VISION UI",
    name: "VISION UI Dashboard",
    description: "A dashboard for managing your business",
    theme_color: "#0075ff",
    background_color: "#0075ff",
    shortcuts: [
      {
        url: "/",
        short_name: "Dashboard",
        name: "VISION UI Dashboard",
        description: "A dashboard for managing your business",
        icons: [
          {
            type: "image/webp",
            src: "/images/pwa/icons/icon-192x192.webp",
            sizes: "192x192",
            purpose: "maskable",
          },
        ],
      },
      {
        url: "/tables",
        short_name: "Tables",
        name: "VISION UI Tables",
        description: "Tables",
        icons: [
          {
            type: "image/webp",
            src: "/images/pwa/icons/icon-192x192.webp",
            sizes: "192x192",
            purpose: "maskable",
          },
        ],
      },
      {
        url: "/profile",
        short_name: "Profile",
        name: "VISION UI Profile",
        description: "Profile",
        icons: [
          {
            type: "image/webp",
            src: "/images/pwa/icons/icon-192x192.webp",
            sizes: "192x192",
            purpose: "maskable",
          },
        ],
      },
    ],
    screenshots: [
      {
        type: "image/webp",
        src: "/images/pwa/screenshots/mobile.webp",
        sizes: "1320x2868",
        form_factor: "narrow",
      },
      {
        type: "image/webp",
        src: "/images/pwa/screenshots/desktop.webp",
        sizes: "2560x1600",
        form_factor: "wide",
      },
    ],
    icons: [
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-48x48.webp",
        sizes: "48x48",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-72x72.webp",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-96x96.webp",
        sizes: "96x96",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-128x128.webp",
        sizes: "128x128",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-144x144.webp",
        sizes: "144x144",
        purpose: "any",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-144x144.webp",
        sizes: "144x144",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-152x152.webp",
        sizes: "152x152",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-192x192.webp",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-256x256.webp",
        sizes: "256x256",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-384x384.webp",
        sizes: "384x384",
        purpose: "maskable",
      },
      {
        type: "image/webp",
        src: "/images/pwa/icons/icon-512x512.webp",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  },
  workbox: {
    globPatterns: [
      "**/*.{html,css,js,ttf,woff,woff2,gif,svg,ico,jpeg,jpg,png,webp,mp4,webm,mp3,wav,ogg,opus}",
    ],
    runtimeCaching: [
      createAssetsRoute(
        "images",
        ["gif", "svg", "ico", "jpeg", "jpg", "png", "webp"],
        100,
      ),
      createAssetsRoute("videos", ["mp4", "webm"], 10),
      createAssetsRoute("audios", ["mp3", "wav", "ogg", "opus"], 20),

      createApiRoute("GET"),
      createApiRoute("POST"),
      createApiRoute("PUT"),
      createApiRoute("PATCH"),
      createApiRoute("DELETE"),
    ],
  },
};

export default pwaConfig;
