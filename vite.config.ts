import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    outDir: "lib",
    sourcemap: true,
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["cjs", "umd"],
      name: "PiniaPersistenceSfStorage",
      // the proper extensions will be added
      fileName: "pinia-persistence-sf-storage",
    },
  },
});
