import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "script",
      devOptions: {
        enabled: true,
        type: "module",
      },
      strategies: "generateSW",
      srcDir: "public",
      filename: "sw.js",
      manifest: {
        short_name: "RSA",
        name: "React Shopping App",
        start_url: "/",
        display: "standalone",
        theme_color: "#FFF",
        icons: [
          { src: "/icons/logo.png", type: "image/png", sizes: "512x512" },
        ],
      },
    }),
  ],
});
