#!/usr/bin/env node

/**
 *
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 * name: location-cli
 * version: 1.0.0
 */

'use-strict';

const head = require('./utils/head');
const cli = require('./utils/cli');
const footer = require('./utils/footer');
const clear = require('clear');


(module.exports = async () => {
    clear();
    head();
    await cli();
    footer();
})();
