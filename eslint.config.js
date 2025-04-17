import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);

// TODO: instalar el linter de Codely per provar-lo

/* Configuració ESLint del projecte SDG que em va passar el David */

// import babelParser from "@babel/eslint-parser";
// import js from "@eslint/js";
// import eslintPluginCheckFile from "eslint-plugin-check-file";
// import eslintPluginImportX from "eslint-plugin-import-x";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
// import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
// import globals from "globals";
// import tseslint from "typescript-eslint";
//
// export default [
//   js.configs.recommended,
//   eslintPluginPrettierRecommended,
//   {
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false,
//       },
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//     },
//     plugins: {
//       "simple-import-sort": eslintPluginSimpleImportSort,
//       import: eslintPluginImportX,
//       "unused-imports": eslintPluginUnusedImports,
//     },
//     settings: {
//       "import/resolver": {
//         typescript: {
//           project: "./tsconfig.json",
//         },
//         node: {
//           extensions: [".js", ".jsx"],
//         },
//       },
//     },
//     rules: {
//       // Error prevention
//       "array-callback-return": ["error", { checkForEach: true }],
//       "no-await-in-loop": "error",
//       "no-constant-binary-expression": "error",
//       "no-constructor-return": "error",
//       "no-promise-executor-return": "error",
//       "no-self-compare": "error",
//       "no-template-curly-in-string": "error",
//       "no-unmodified-loop-condition": "error",
//       "no-unreachable-loop": "error",
//       "no-unused-private-class-members": "error",
//       "no-use-before-define": [
//         "error",
//         {
//           functions: false,
//           classes: true,
//           variables: true,
//           allowNamedExports: false,
//         },
//       ],
//       "require-atomic-updates": "error",
//
//       // Good practices
//       camelcase: ["error", { properties: "never" }],
//       eqeqeq: "error",
//       "new-cap": ["error", { capIsNew: false }],
//       "no-array-constructor": "error",
//       "no-console": ["warn", { allow: ["error"] }],
//       "no-else-return": ["error", { allowElseIf: false }],
//       "no-extend-native": "error",
//       "no-lonely-if": "error",
//       "no-param-reassign": "error",
//       "no-return-assign": "error",
//       "no-throw-literal": "error",
//       "no-var": "error",
//       "object-shorthand": "error",
//       "prefer-const": "error",
//       "prefer-rest-params": "error",
//       "prefer-spread": "error",
//       "prefer-template": "error",
//       radix: "error",
//       yoda: "error",
//
//       // Style
//       curly: "error",
//       "lines-between-class-members": [
//         "error",
//         "always",
//         { exceptAfterSingleLine: true },
//       ],
//       "padding-line-between-statements": [
//         "error",
//         { blankLine: "always", prev: "*", next: "return" },
//       ],
//
//       // Plugins
//       "import/first": "error",
//       "import/newline-after-import": "error",
//       "import/no-duplicates": "error",
//       "import/no-unresolved": "error",
//       "import/no-webpack-loader-syntax": "error",
//       "prettier/prettier": [
//         "error",
//         { printWidth: 120, useTabs: true, tabWidth: 4 },
//       ],
//       "simple-import-sort/exports": "error",
//       "simple-import-sort/imports": "error",
//       "unused-imports/no-unused-imports": "error",
//       "no-unused-vars": "off",
//       "unused-imports/no-unused-vars": [
//         "warn",
//         {
//           vars: "all",
//           varsIgnorePattern: "^_",
//           args: "after-used",
//           argsIgnorePattern: "^_",
//         },
//       ],
//     },
//   },
//   ...tseslint.configs.recommended,
//   eslintPluginImportX.configs.typescript,
//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     languageOptions: {
//       sourceType: "module",
//       parserOptions: {
//         projectService: true,
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     settings: {
//       "import/resolver": {
//         typescript: {
//           project: "./tsconfig.json",
//         },
//         node: {
//           extensions: [".ts", ".tsx"],
//         },
//       },
//     },
//     rules: {
//       "@typescript-eslint/member-ordering": [
//         "error",
//         {
//           default: [
//             // Index signature
//             "signature",
//
//             // Fields
//             "public-static-field",
//             "protected-static-field",
//             "private-static-field",
//             "public-decorated-field",
//             "protected-decorated-field",
//             "private-decorated-field",
//             "public-instance-field",
//             "protected-instance-field",
//             "private-instance-field",
//             "public-abstract-field",
//             "protected-abstract-field",
//
//             // Constructors
//             "public-constructor",
//             "protected-constructor",
//             "private-constructor",
//
//             // Methods
//             "public-abstract-method",
//             "protected-abstract-method",
//             "public-static-method",
//             "protected-static-method",
//             "private-static-method",
//             "public-decorated-method",
//             "protected-decorated-method",
//             "private-decorated-method",
//             "public-instance-method",
//             "protected-instance-method",
//             "private-instance-method",
//           ],
//         },
//       ],
//       "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
//       "@typescript-eslint/no-confusing-void-expression": [
//         "error",
//         { ignoreArrowShorthand: true },
//       ],
//       "@typescript-eslint/no-explicit-any": ["warn"],
//       "@typescript-eslint/no-extra-non-null-assertion": ["error"],
//       "@typescript-eslint/no-floating-promises": ["error"],
//       "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
//       "@typescript-eslint/no-non-null-assertion": ["error"],
//       "@typescript-eslint/no-require-imports": ["error"],
//       "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
//       "@typescript-eslint/no-unnecessary-condition": ["error"],
//       "@typescript-eslint/no-useless-constructor": ["error"],
//       "@typescript-eslint/prefer-for-of": ["error"],
//       "@typescript-eslint/prefer-nullish-coalescing": ["error"],
//       "@typescript-eslint/prefer-readonly": ["error"],
//       "@typescript-eslint/promise-function-async": [
//         "error",
//         { checkArrowFunctions: false },
//       ],
//       "@typescript-eslint/switch-exhaustiveness-check": ["error"],
//       "unused-imports/no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         {
//           args: "all",
//           argsIgnorePattern: "^_",
//           caughtErrors: "all",
//           caughtErrorsIgnorePattern: "^_",
//           destructuredArrayIgnorePattern: "^_",
//           varsIgnorePattern: "^_",
//           ignoreRestSiblings: true,
//         },
//       ],
//       "import/no-unresolved": "error",
//     },
//   },
//   {
//     files: ["**/*.ts"],
//     rules: {
//       "@typescript-eslint/explicit-module-boundary-types": ["error"],
//     },
//   },
//   {
//     files: ["**/*.js"],
//     rules: {
//       "@typescript-eslint/no-unused-vars": ["off"],
//     },
//   },
//   {
//     ignores: ["**/.vscode/", "**/node_modules/", "**/dist/", "**/chat-ai-ext/"],
//   },
//   {
//     plugins: {
//       "check-file": eslintPluginCheckFile,
//     },
//     rules: {
//       "prettier/prettier": [
//         "error",
//         { printWidth: 120, useTabs: true, tabWidth: 4 },
//       ],
//       "check-file/folder-naming-convention": [
//         "error",
//         {
//           // Kebab-case and folders with square brackets are allowed
//           "**/*": "+([a-z-\\[\\]])",
//         },
//       ],
//       "simple-import-sort/imports": [
//         "error",
//         {
//           groups: [
//             // Side effect imports: `import "./setup";`
//             ["^\\u0000"],
//             // Packages: `import fs from "fs";`
//             ["^@?\\w"],
//             // Alias imports starting with `@/`
//             ["^@/"],
//             // Parent imports. Put `..` last.
//             ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
//             // Other relative imports. Put same-folder imports and `.` last.
//             ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
//             // Style imports.
//             ["^.+\\.s?css$"],
//           ],
//         },
//       ],
//       "no-use-before-define": [
//         "error",
//         {
//           functions: false,
//           classes: true,
//           variables: true,
//           allowNamedExports: false,
//         },
//       ],
//     },
//   },
// ];
