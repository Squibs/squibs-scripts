# @squibs/eslint-config

My ESLint configuration for JavaScript projects.


This was made with the assumption that Visual Studio Code with the ESLint extension are being used.

## Installation

### 1) Install

**npm:**

`npm i -D @squibs/eslint-config`

**yarn:**

`yarn add -D @squibs/eslint-config`

### 2) Install ESLint plugins (if necessary)

**npm:**

Manually install the listed versions of packages, alongside this package, from the following command:

`npm info "@squibs/eslint-config" peerDependencies`

or have everything automatically installed using this command:

`npx install-peerdeps -D @squibs/eslint-config`

_<font size="2">With `npm version >= 7.0.0` normal package installation: `npm i -D @squibs/eslint-config`, the above is not needed, as it automatically installs peer dependencies.</font>_

**yarn:**

Manually install the listed versions of packages, alongside this package, from the same npm command:

`npm info "@squibs/eslint-config" peerDependencies`

or follow up on the unmet peer dependency warnings which come from a normal yarn package installation:

`yarn add -D @squibs/eslint-config`

_<font size="2">If a `yarn.lock` file already exists for your project: `npx install-peerdeps -D @squibs/eslint-config` can be used to automatically install the peer dependencies, instead, as it will detect that you are already using yarn.</font>_

### 3) Optional:

Include [my Prettier configuration](https://github.com/Squibs/squibs-scripts/tree/main/packages/prettier-config) along side this.

## Usage

Add `@squibs/eslint-config` to the `"extends"` array of your ESLint configuration file. This can be in a `.eslintrc.*` file or inside of `package.json`.

`.eslintrc.*`:

```
{
  "extends": [
    "other-eslint-config-in-use-by-you",
    "@squibs/eslint-config"
  ]
}
```

`package.json`:

```
{
  "eslintConfig": {
    "extends": [
      "other-eslint-config-in-use-by-you",
      "@squibs/eslint-config"
    ]
  }
}
```
