import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "es2022",
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
});
