// This is used to load the file directly into a javascript object
const json = require("./fin535-ethusd.json");
const { maPrices } = require("./maPrices.js");
const ma10 = maPrices(json, 10);
console.log(ma10);
