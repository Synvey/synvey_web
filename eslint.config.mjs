import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Allow quotes in text content without forcing HTML entities
      "react/no-unescaped-entities": "off",
      // Allow temporary usage of <img>; consider migrating to next/image later
      "@next/next/no-img-element": "warn",
      // Permit any in a few components for now; consider typing later
      "@typescript-eslint/no-explicit-any": "off",
      // Loosen unused vars to warning to avoid blocking builds during development
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
