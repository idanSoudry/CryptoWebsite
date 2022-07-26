const { response, json } = require("express");
const express = require("express");
var request = require("request");
const app = express();
const port = 5000;
const key = "10857253-502B-4974-9E4E-BD554EF5661F";
const bitcoinReq = `https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=1DAY&time_start=2021-01-01T00:00:00&time_end=2021-12-31T00:00:00&limit=100000&apikey=${key}`;
const ethriumReq = `https://rest.coinapi.io/v1/exchangerate/ETH/USD/history?period_id=1DAY&time_start=2021-01-01T00:00:00&time_end=2021-12-31T00:00:00&limit=100000&apikey=${key}`;
const polkadotReq = `https://rest.coinapi.io/v1/exchangerate/DOT/USD/history?period_id=1DAY&time_start=2021-01-01T00:00:00&time_end=2021-12-31T00:00:00&limit=100000&apikey=${key}`;
const adaReq = `https://rest.coinapi.io/v1/exchangerate/ADA/USD/history?period_id=1DAY&time_start=2021-01-01T00:00:00&time_end=2021-12-31T00:00:00&limit=100000&apikey=${key}`;
/*
this function returns the relevant information from the Json object
*/
function getStats(body) {
  var finels = []; // array for the relevant information
  var count = 0;

  const arr = body.slice(1, -1).split("},"); //insert the jsons objects into array
  for (let i of arr) {
    // going thruogh the array
    count++;
    if (!i.includes("}"))
      // fix the string
      i = i + "}";
    const obj = JSON.parse(i); //deserilaze the string to json
    finels.push(obj.rate_close.toString()); //adding the relevant information
    console.log(count);
  }
  return finels;
}

app.get("/BTCrate", (req, res) => {
  request(bitcoinReq, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.get("/ETHrate", (req, res) => {
  request(ethriumReq, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.get("/ADArate", (req, res) => {
  request(adaReq, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.get("/DOTrate", (req, res) => {
  request(polkadotReq, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
