import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/in-browser-markdown-editor/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
})
