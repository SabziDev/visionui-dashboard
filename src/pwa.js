/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable camelcase */
/* eslint-disable custom/sort-object-props */

import { API_BASE_URL } from "./data/constants.js";

const STATIC_CACHE_PATTERNS = [
  "**/*.{html,css,js}",
  "**/*.{ttf,woff,woff2}",
  "**/*.{jpeg,jpg,png,webp,gif,svg,ico}",
  "**/*.{mp4,webm}",
  "**/*.{mp3,wav,ogg,opus}",
];
const DESTINATION_MATCHERS = {
  image: ({ request }) => request.destination === "image",
  video: ({ request }) => request.destination === "video",
  audio: ({ request }) => request.destination === "audio",
};

const createApiUrlMatcher = (baseUrl) => {
  const escapedBaseUrl = baseUrl.replaceAll(/[$(-+.?[-^{|}]/g, String.raw`\$&`);

  return new RegExp(`^${escapedBaseUrl}/.*$`);
};
const createApiRuntimeRoute = (method) => ({
  urlPattern: createApiUrlMatcher(API_BASE_URL),
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
const createAssetsRuntimeRoute = (destination, maxEntries) => {
  return {
    urlPattern: DESTINATION_MATCHERS[destination],
    handler: "CacheFirst",
    options: {
      cacheName: `${destination}s-runtime-cache`,
      expiration: {
        maxEntries,
      },
    },
  };
};

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
    navigationPreload: true,

    globPatterns: STATIC_CACHE_PATTERNS,
    runtimeCaching: [
      createAssetsRuntimeRoute("image", 100),
      createAssetsRuntimeRoute("video", 10),
      createAssetsRuntimeRoute("audio", 20),

      createApiRuntimeRoute("GET"),
      createApiRuntimeRoute("POST"),
      createApiRuntimeRoute("PUT"),
      createApiRuntimeRoute("PATCH"),
      createApiRuntimeRoute("DELETE"),
    ],
  },
};

export default pwaConfig;
