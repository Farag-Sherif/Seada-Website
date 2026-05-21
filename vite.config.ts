import path from "node:path";
import { defineConfig, loadEnv, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // إزالة /api من آخر الرابط
  const apiTarget = (env.VITE_API_URL || "")
    .replace(/\/api\/?$/, "")
    .replace(/\/+$/, "");

  return {
    plugins: [
      // دعم JSX داخل ملفات .js
      {
        name: "vite-js-to-jsx",
        async transform(code, id) {
          if (!/src\/.*\.js$/.test(id)) return null;

          return transformWithEsbuild(code, id, {
            loader: "jsx",
            jsx: "automatic",
          });
        },
      },

      react(),

      // PWA Plugin
      VitePWA({
        registerType: "autoUpdate",

        injectRegister: "auto",

        devOptions: {
          enabled: true,
        },

        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "masked-icon.png",
          "pwa-maskable-512x512.png",
        ],

        manifest: {
          name: "Seada",
          short_name: "Seada",
          description: "Seada — Premium Quality Products & Trusted Supplier",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait",
          scope: "/",
          start_url: "/",

          icons: [
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/pwa-maskable-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },

        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,

          globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}"],

          runtimeCaching: [
            {
              urlPattern: /^https:\/\/.*\.(png|jpg|jpeg|svg|webp)$/,

              handler: "CacheFirst",

              options: {
                cacheName: "images-cache",

                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },

            {
              urlPattern: /^https:\/\/.*\/api\/.*/,

              handler: "NetworkFirst",

              options: {
                cacheName: "api-cache",

                networkTimeoutSeconds: 10,

                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24,
                },

                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],

    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,

          silenceDeprecations: [
            "legacy-js-api",
            "import",
            "slash-div",
            "color-functions",
            "global-builtin",
            "if-function",
          ],
        },
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),

        "next/link": path.resolve(__dirname, "src/router/NextLinkCompat.tsx"),

        "next/router": path.resolve(__dirname, "src/router/useRouter.ts"),

        "next/image": path.resolve(
          __dirname,
          "src/components/common/AppImage.tsx",
        ),

        "next/head": path.resolve(__dirname, "src/router/HeadCompat.tsx"),

        "next/dynamic": path.resolve(__dirname, "src/router/dynamic.tsx"),
      },
    },

    server: apiTarget
      ? {
          proxy: {
            "/api/proxy": {
              target: apiTarget,
              changeOrigin: true,
              secure: false,

              // /api/proxy/blogs → /api/blogs
              rewrite: (p) => p.replace(/^\/api\/proxy/, "/api"),

              cookieDomainRewrite: "",
            },
          },
        }
      : undefined,

    preview: apiTarget
      ? {
          proxy: {
            "/api/proxy": {
              target: apiTarget,
              changeOrigin: true,
              secure: false,

              rewrite: (p) => p.replace(/^\/api\/proxy/, "/api"),

              cookieDomainRewrite: "",
            },
          },
        }
      : undefined,
  };
});
