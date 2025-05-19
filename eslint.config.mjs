import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuración principal
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignorar advertencias en archivos generados como wasm.js
  {
    files: ["src/generated/"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

// Aquí agregamos la propiedad ignores para que ESLint ignore la carpeta .next
export default {
  ignores: [".next/"],
  overrides: eslintConfig,
};
