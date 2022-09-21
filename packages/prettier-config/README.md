# @squibs/prettier-config

My Prettier configuration that I use for most of my projects.

**If you have a .prettierignore file already at your project root, it will be overwritten when this package is installed.**

A `postinstall` script from npm is used along with [gently-copy](https://www.npmjs.com/package/gently-copy) to move the `.prettierignore` file to your project root.

## Installation

**npm:**

`npm install -D @squibs/prettier-config`

**yarn:**

`yarn add -D @squibs/prettier-config`

## Usage

Reference `@squibs/prettier-config` in your `package.json` (from [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)):

```
{
  "name": "your-package-name",
  "version": "1.0.0",
  "prettier": "@squibs/prettier-config"
}
```
