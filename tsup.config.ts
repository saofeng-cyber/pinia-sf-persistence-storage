import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "lib",
  minify: true,
  external: ["pinia"],
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: false,
  clean: true,
});
