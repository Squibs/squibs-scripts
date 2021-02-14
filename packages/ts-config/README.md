# @squibs/ts-config

My TypeScript configurations that I use for my TypeScript projects.

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
  "extends": "@squibs/ts-config"
}
```

**TypeScript Projects with React:**

```
{
  "extends": "@squibs/ts-config/tsconfig.react.json"
}
```
