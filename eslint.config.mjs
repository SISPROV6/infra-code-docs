import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  
  { ignores: [".angular/*", "dist/*"] },

  {languageOptions: { globals: globals.browser }},

  ...tseslint.configs.recommended,
];
