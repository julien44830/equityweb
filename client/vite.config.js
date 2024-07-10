import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['lottie-react'], // Déclare lottie-react comme une dépendance externe
    },
  },
});
