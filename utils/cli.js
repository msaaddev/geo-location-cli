const axios = require('axios');
const io = require('console-read-write');
const chalk = require('chalk');
const ora = require('ora');

module.exports = async () => {
    io.write(chalk.green('\nEnter any IP Address: '));
    const ip = await io.read();
    try {
        const spinner = ora(' Fetching Location Information').start();
        const { data } = await axios.get(`https://api.ipgeolocationapi.com/geolocate/${ip}`);
        spinner.stop();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
