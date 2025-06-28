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
    projectService: { allowDefaultProject: ["*.cjs"] },
    tsconfigRootDir: __dirname,
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
    "simple-import-sort",
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
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier",
    // This will display prettier errors as ESLint errors.
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    // "react/jsx-sort-props": "warn",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      { groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]] },
    ],
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "warn",
      {
        ignoreConditionalTests: true,
        ignorePrimitives: { string: true },
        ignoreTernaryTests: true,
      },
    ],
  },
};
