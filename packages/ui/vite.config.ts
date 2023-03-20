//import { defineConfig } from 'vite';
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3020,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@ts-css-modules-monorepo-example/ui",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    watch: false, // maybe a good option for CI
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
