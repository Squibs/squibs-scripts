# @squibs/editor-config

The EditorConfig that I use for most of my projects.

## Installation

**npm:**

`npm install -D @squibs/editor-config`

**yarn:**

`yarn add -D @squibs/editor-config`

## Usage

EditorConfig does not have a way of extending a configuration, as of the creation of this package. As a way to get around this, the `postinstall` script from npm is used along with [gently-copy](https://www.npmjs.com/package/gently-copy) to move the `.editorconfig` file to your project root.

**If you have a `.editorconfig` file already at your project root, it will be overwritten when this package is installed.**

## Known Issues

This package assumes to be installed at: `<project>/node_modules/@squibs/editor-config`.
