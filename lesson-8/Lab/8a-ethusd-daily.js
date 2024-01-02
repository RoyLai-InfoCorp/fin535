// This is used to load the file directly into a javascript object
const json = require("./fin535-ethusd.json");
const date2string = require("./date2string.js");

// This will read and display the CloseTime and ClosePrice for the 1st array
// const price0 = json.result["86400"][0];
// console.log("CloseTime: ", date2string(price0[0] * 1000));
// console.log("ClosePrice: ", price0[4]);

// This will read and create a new array of {date, price} object
const dailyPrices = json.result["86400"]
    .slice()
    .reverse()
    .map((price) => ({
        date: date2string(price[0] * 1000),
        price: price[4],
    }));
console.log(dailyPrices);
