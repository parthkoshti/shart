// dirname.ts
import { dirname } from "path";
import { fileURLToPath } from "url";

// Works in both ESM and CJS builds
export const __filenameSafe =
  typeof __filename !== "undefined"
    ? __filename // CJS
    : fileURLToPath(import.meta.url); // ESM

export const __dirnameSafe =
  typeof __dirname !== "undefined"
    ? __dirname // CJS
    : dirname(__filenameSafe); // ESM
