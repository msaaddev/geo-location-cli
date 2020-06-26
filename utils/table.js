const cliTable = require("cli-table");
const colors = require("colors");

module.exports = (data) => {
  const table = new cliTable({
    head: ["Location Information".yellow, "Result".yellow],
  });

  let languages = "";

  for (let i = 0, j = 0; i < data.languages_spoken.length; i++) {
    languages += data.languages_spoken[i];
    j = i;
    if (j++ === data.languages_spoken.length - 1) break;
    else languages += ", ";
  }

  table.push(
    { Continent: data.continent },
    { "Country Name": data.name },
    { "Country Code": data.country_code },
    { Nationality: data.nationality },
    { "International Olympic Committee": data.ioc },
    { "Currency Code": data.currency_code },
    { "World Region": data.world_region },
    { Subregion: data.subregion },
    { "Language Spoken": languages },
    { "Start Of Week": data.start_of_week },
    { Latitude: data.geo.latitude },
    { Longitude: data.geo.longitude },
  );

  console.log(table.toString());
};
