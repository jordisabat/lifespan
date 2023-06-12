import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./src",
  define: { "process.env": {} },
  test: {
    environment: "happy-dom",
  },
});
