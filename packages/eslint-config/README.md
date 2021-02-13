# @squibs/eslint-config

My ESLint configuration for JavaScript projects.


This was made with assumption Visual Studio Code with the ESLint extension is being used.

# Installation

**npm:**

Manually install the listed versions of packages from the following command:

`npm info "@squibs/eslint-config" peerDependencies`

or have them automatically installed using this command:

`npx install-peerdeps -D @squibs/eslint-config`

With npm version >= 7.0.0:

`npm install -D @squibs/eslint-config`

Works as it automatically installs peer dependencies.

**yarn:**

Manually install the listed versions of packages from the same npm command:

`npm info "@squibs/eslint-config" peerDependencies`

or follow up on the unmet peer dependency warnings which come from a normal yarn package installation:

`yarn add -D @squibs/eslint-config`

If a `yarn.lock` file already exists for your project:

`npx install-peerdeps -D @squibs/eslint-config`

Can be used to automatically install the peer dependencies, instead, as it will detect that you are already using yarn.

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
