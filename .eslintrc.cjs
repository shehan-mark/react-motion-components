module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb-typescript",
    "plugin:storybook/recommended"
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': ['react', '@typescript-eslint', 'prettier'],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    "react/require-default-props": ["error", {
      "forbidDefaultForRequired": false,
      "functions": "defaultArguments" //Here
    }],

    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true
    }]
  }
};