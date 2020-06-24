const axios = require('axios');
const io = require('console-read-write');
const chalk = require('chalk');
const ora = require('ora');
const table = require('./table');

module.exports = async () => {
    io.write(chalk.green('\nEnter any IP Address: '));
    const ip = await io.read();
    const spinner = ora(' Fetching Location Information');
    try {
        io.write('');
        spinner.start();
        const { data } = await axios.get(`https://api.ipgeolocationapi.com/geolocate/${ip}`);
        spinner.stop();

        table(data);
    } catch (error) {
        spinner.stop();
        io.write(chalk.red('\n	-------------------------------------------'));
        io.write(chalk.red('	|                                         |'));
        io.write(chalk.red(`	|    	     Invalid IP Address   	  |`));
        io.write(chalk.red('	|                                         |'));
        io.write(chalk.red('	-------------------------------------------'));
    }
};
