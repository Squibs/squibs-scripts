/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */
('use strict');

var gentlyCopy = require('gently-copy');

var filesToCopy = ['.prettierignore'];

// User's local directory
// Warning: This assumes the package is installed into `node_modules/<@somescope>/<package-name>/`
var userPath = '../../../';

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath, { overwrite: true });

// to allow extending of prettier config
module.exports = require('./.prettierrc.json');
