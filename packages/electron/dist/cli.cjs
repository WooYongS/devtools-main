'use strict';

const electron = require('electron');
const execa = require('execa');
const pathe = require('pathe');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const electron__default = /*#__PURE__*/_interopDefaultCompat(electron);

const appPath = decodeURIComponent(pathe.resolve(new URL("../dist/app.cjs", (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('cli.cjs', document.baseURI).href))).pathname));
const argv = process.argv.slice(2);
const result = execa.execaSync(electron__default, [appPath].concat(argv), {
  stdio: "inherit",
  windowsHide: false
});
process.exit(result.exitCode);
