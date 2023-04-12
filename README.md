**eslint with prettier v2**

Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details)

1. `pnpm add -D eslint prettier eslint-config-prettier`
2. Create .prettierrc and add

```
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "none",
}
```

or open settings.json and add

```
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "none",
```

3. `pnpm create @eslint/config`
4. Open .eslintrc and add

```
extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'prettier'
  ],
parserOptions: {
  project: 'tsconfig.json'
},
,
settings: { react: { version: 'detect' } },
rules: {
   '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    "@typescript-eslint/no-unused-vars": "warn"
  },
```

5. Open package.json en add

```
    "scripts": {
      "lint": "npx eslint src",
      "lint:fix": "npm run lint -- --fix",
      "prettier": "npx prettier src --check",
      "prettier:fix": "npm run prettier -- --write",
      "format": "npm run prettier:fix && npm run lint:fix"
    },
```

and

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll.eslint"
  ],
```
6. Create .eslintignore and ignore this files(optional)
```
src/vite-env.d.ts
vite.config.ts
```
