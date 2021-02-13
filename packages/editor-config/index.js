/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

"use strict";

var gentlyCopy = require("gently-copy");

var filesToCopy = [".editorconfig"];

// User's local directory
// Warning: This assumes the package is installed into `node_modules/<@somescope>/<package-name>/`
var userPath = "../../../";

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath);
