module.exports = {
  extends: ["@remix-run/eslint-config", "plugin:prettier/recommended"],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
      },
      {
        usePrettierrc: false
      }
    ]
  }
};
