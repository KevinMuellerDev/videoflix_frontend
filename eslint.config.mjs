import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ),
  {
    plugins:["@typescript-eslint","react-hooks"],
    rules:{
      "react-hooks/rules-of-hooks":"error",
      "react-hooks/exhaustive-deps":"warn",
      "@typescript-eslint/no-unused-vars":["warn",{argsIgnorePattern:"^_"}],
      "@typescript-eslint/explicit-module-boundary-types":"off",
      "no-console":"warn",
      "semi":["error","always"],
      "quotes":["error","double"]
    }
  }
];

export default eslintConfig;
