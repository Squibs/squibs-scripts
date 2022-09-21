# @squibs/ts-config

My TypeScript configurations that I use for my TypeScript projects.

**If you have a `tsconfig.json` file already at your project root, it will be overwritten when this package is installed.**

A `postinstall` script from npm is used along with [gently-copy](https://www.npmjs.com/package/gently-copy) to move the `tsconfig.json` file to your project root.


## Installation

### 1) Install

**npm:**

`npm install -D @squibs/ts-config`

**yarn:**

`yarn add -D @squibs/ts-config`

### 2) Optional

Include my [eslint-config-typescript](https://github.com/Squibs/squibs-scripts/tree/main/packages/eslint-config-typescript) package  
or my [eslint-config-typescript-react](https://github.com/Squibs/squibs-scripts/tree/main/packages/eslint-config-typescript-react) package.

## Usage

Reference `@squibs/ts-config` in your `tsconfig.json`.

**TypeScript Projects:**

```
{
  "extends": "@squibs/ts-config/tsconfig.normal.json"
}
```

**TypeScript Projects with React:**

```
{
  "extends": "@squibs/ts-config/tsconfig.react.json"
}
```
