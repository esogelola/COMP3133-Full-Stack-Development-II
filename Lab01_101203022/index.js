const csv = require("csv-parser");
const fs = require("fs");
const results = [];

const countryFileName = "input_countries.csv";

try {
  if (fs.existsSync("./canada.txt")) {
    fs.unlinkSync("canada.txt");
    console.log("A canada.txt file has been found - deleted.");
  }
  if (fs.existsSync("./usa.txt")) {
    fs.unlinkSync("usa.txt");
    console.log("A usa.txt file has been found - deleted.");
  }
} catch (err) {
  console.error(err);
}

fs.createReadStream(countryFileName)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    canadaData = results.filter((data) => data["country"] == "Canada");
    strCanadaData = "country,year,population\n";
    canadaData.map(
      (data) =>
        (strCanadaData +=
          data.country + "," + data.year + "," + data.population + "\n")
    );
    fs.writeFileSync("./canada.txt", strCanadaData);
    console.log("Created canada.txt");

    americanData = results.filter((data) => data["country"] == "United States");
    strAmericanData = "country,year,population\n";
    americanData.map(
      (data) =>
        (strAmericanData +=
          data.country + "," + data.year + "," + data.population + "\n")
    );
    fs.writeFileSync("./usa.txt", strAmericanData);
    console.log("Created usa.txt");
  });
