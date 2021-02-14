# @squibs/eslint-config-typescript-react

My ESLint configuration for TypeScript React projects.

This was made with the assumption that Visual Studio Code with the ESLint extension are being used.

## Installation

### 1) Install

**npm:**

`npm i -D @squibs/eslint-config-typescript-react`

**yarn:**

`yarn add -D @squibs/eslint-config-typescript-react`

### 2) Install ESLint plugins (if necessary)

**npm:**

Manually install the listed versions of packages, alongside this package, from the following command:

`npm info "@squibs/eslint-config-typescript-react" peerDependencies`

or have everything automatically installed using this command:

`npx install-peerdeps -D @squibs/eslint-config-typescript-react`

_<font size="2">With `npm version >= 7.0.0` normal package installation: `npm i -D @squibs/eslint-config-typescript-react`, the above is not needed, as it automatically installs peer dependencies.</font>_

**yarn:**

Manually install the listed versions of packages, alongside this package, from the same npm command:

`npm info "@squibs/eslint-config-typescript-react" peerDependencies`

or follow up on the unmet peer dependency warnings which come from a normal yarn package installation:

`yarn add -D @squibs/eslint-config-typescript-react`

_<font size="2">If a `yarn.lock` file already exists for your project: `npx install-peerdeps -D @squibs/eslint-config-typescript-react` can be used to automatically install the peer dependencies, instead, as it will detect that you are already using yarn.</font>_

### 3) Optional:

Include [my Prettier configuration](https://github.com/Squibs/squibs-scripts/tree/main/packages/prettier-config) alongside this.

Include [my TypeScript configuration](https://github.com/Squibs/squibs-scripts/tree/main/packages/eslint-config-typescript) alongside this.

## Usage

Add `@squibs/eslint-config-typescript-react` to the `"extends"` array of your ESLint configuration file. This can be in a `.eslintrc.*` file or inside of `package.json`.

Also make sure to link your `tsconfig.json` to ESLint, as well as update your `"include"` for files you are linting.

`.eslintrc.*`:

```
{
  "extends": [
    "other-eslint-config-in-use-by-you",
    "@squibs/eslint-config-typescript-react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

`package.json`:

```
{
  "eslintConfig": {
    "extends": [
      "other-eslint-config-in-use-by-you",
      "@squibs/eslint-config-typescript-react"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```

`tsconfig.json`:

```
"include": ["src/**/*.ts", "src/**/*.js"]
```
