const cliTable = require('cli-table');
const colors = require('colors');

module.exports = (data) => {
  const table = new cliTable({
    head: ['Location Information'.yellow, 'Result'.yellow],
  });

  table.push(
    { Continent: data.continent },
    { 'Country Name': data.name },
    { 'Country Code': data.country_code },
    { Nationality: data.nationality },
    { 'International Olympic Committee': data.ioc },
    { 'Currency Code': data.currency_code },
    { 'World Region': data.world_region },
    { Subregion: data.subregion },
    { 'European Union Member': data.eu_member },
    { 'Language Spoken': data.languages_spoken },
    { 'Start Of Week': data.start_of_week }
  );

  console.log(table.toString());
};
