import { defineConfig } from "@fullstacksjs/eslint-config";
import sabzidev from "@sabzidev/eslint-rules";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

const baseRules = {
  "func-style": ["warn", "expression"],
  quotes: [
    "error",
    "double",
    { avoidEscape: true, allowTemplateLiterals: false },
  ],
  eqeqeq: ["error", "always"],
  "no-console": "warn",
};
const plugins = [
  sabzidev.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
];
const pluginsRules = {
  "unicorn/filename-case": "off",
  "unicorn/prefer-global-this": "off",
  "unicorn/name-replacements": "off",
  "unicorn/no-array-sort": "off",
  "unicorn/no-null": "off",
  "unicorn/default-export-style": "off",

  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
};

const config = defineConfig(
  {
    tailwind: { entryPoint: "./src/input.css" },
    rules: baseRules,
  },

  plugins,
  { rules: pluginsRules },
);

export default config;
