import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test36_2/", // ★これを追加（前後のスラッシュを忘れないでください）
});
