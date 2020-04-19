// This is the entry point for the npm standalone package
import Chat from './lib/chat.js';

// We use a CommonJS export here so people don't have to `var Sidecar = require('gitter-sidecar').default`
// See https://github.com/webpack/webpack/issues/706
module.exports = Chat;
