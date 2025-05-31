import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
dotenv.config();
console.log("VITE_BACKEND_URL", process.env.VITE_BACKEND_URL);


export default defineConfig({
  plugins: [react(), tailwindcss()],
});
