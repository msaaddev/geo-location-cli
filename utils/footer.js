const { cyan, dim } = require('chalk');
const io = require('console-read-write');

module.exports = () => {
    io.write(dim(cyan('\n Star ⭐️ the repo: https://github.com/msaaddev/location-cli/')));
    io.write(dim(cyan(' Connect with me: https://twitter.com/MSaaddev/\n')));
};
