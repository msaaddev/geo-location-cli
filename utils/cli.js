const axios = require('axios');
const io = require('console-read-write');
const chalk = require('chalk');
const ora = require('ora');
const table = require('./table');
const cliTable = require('cli-table');

module.exports = async () => {
  io.write(chalk.green('\nEnter any IP Address: '));
  const ip = await io.read();
  const spinner = ora(' Fetching Location Information');
  try {
    io.write('');
    spinner.start();
    const { data } = await axios.get(
      `https://api.ipgeolocationapi.com/geolocate/${ip}`
    );
    spinner.stop();
    table(data);
  } catch (error) {
    spinner.stop();
    const errorTable = new cliTable();
    errorTable.push({ Error: 'Invalid IP Address' });
    console.log(errorTable.toString());
  }
};
