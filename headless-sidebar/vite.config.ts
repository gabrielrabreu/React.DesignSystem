import { defineConfig } from "vite";

import viteReact from "@vitejs/plugin-react-swc";

import path from "path";

export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
