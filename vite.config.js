import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },

      manifest: {
        name: "React Shopping App",
        short_name: "RSA",
        description: "React Shopping App description",
        theme_color: "#FFF",
        icons: [
          {
            src: "/icons/icons8-react-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/icons/icons8-react-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icons8-react-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
