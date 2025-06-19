/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  ignorePatterns: [".vscode/", "node_modules/", "out/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  globals: {
    page: "writable",
    browser: "writable",
    context: "writable",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": { typescript: true, node: true },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "prettier",
    "jsx-a11y",
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier",
    // This will display prettier errors as ESLint errors.
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
