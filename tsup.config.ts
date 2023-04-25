import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: "lib",
  minify: true,
  external: ['pinia'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
})