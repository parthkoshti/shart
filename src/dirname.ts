// src/utils/dirname.ts
import path from "path";
import { fileURLToPath } from "url";

let __dirnameShim: string;

if (typeof __dirname !== "undefined") {
  // CJS build
  __dirnameShim = __dirname;
} else {
  // ESM build
  const __filename = fileURLToPath(import.meta.url);
  __dirnameShim = path.dirname(__filename);
}

export const __dirnameSafe = __dirnameShim;
