import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import react from "@vitejs/plugin-react";
// import autoprefixer from "autoprefixer";
// import tailwindcss from "tailwindcss";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [
//     react(), // Enables React Fast Refresh and JSX support
//   ],
//   css: {
//     postcss: {
//       plugins: [tailwindcss(), autoprefixer()],
//     },
//   },
// });
