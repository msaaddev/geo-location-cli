const { cyan, dim } = require('chalk');
const io = require('console-read-write');

module.exports = () => {
    io.write(dim(cyan('\n Star ⭐️ the repo: https://github.com/msaaddev/geo-location-cli/')));
    io.write(dim(cyan(' Connect with me: https://twitter.com/MSaaddev/\n')));
};
