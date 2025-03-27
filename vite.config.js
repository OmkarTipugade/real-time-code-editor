import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        "droid-mono": ["Droid Sans Mono", "monospace"],
      },
    },
  },
  define: {
    // Explicitly define the environment variables
    __APP_ENV__: JSON.stringify(process.env.VITE_BACKEND_URL),
  },
  server: {
    // Ensure environment variables are loaded
    port: 5173,
  },
});
