module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "spaced-comment": 0,
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "eslint:recommended",
      ],
      rules: {
        "global-require": "off"
      }
    }
  ]
}


