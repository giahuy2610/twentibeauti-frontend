import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
  ? '/twentibeauti-frontend/' // Thay tên repository của các bạn vào đây nhé
  : '/',
});
