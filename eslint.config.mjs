import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */ //Asagida autocompletion sagliyor (magic)
export default [
  js.configs.recommended, //recommended yerine all yaparsan her seyi kontrol eder.
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    //Our Config
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, //window, document gibi globaller icin, spread ile aciyoruz
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "of", // ' yerine &apos gerekli eger aciksa
      "react/prop-types": "off",
    },
  },
  //Prettier config has to be last
  //Burada array olarak export edilen kurallar
  //Sirayla yukaridan asagiya birbirinin ustune ekleniyor
  //Prettier sonda olmali.
  //Sadece formatting yaptigi icin sonda. (detay bilmiyorum => magic)
  prettier,
];
