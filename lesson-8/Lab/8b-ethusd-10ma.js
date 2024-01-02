// This is used to load the file directly into a javascript object
const json = require("./fin535-ethusd.json");
const date2string = require("./date2string.js");

// This will read and create a new array of {date, price} object
const dailyPrices = json.result["86400"]
    .slice()
    .reverse()
    .map((price) => ({
        date: date2string(price[0] * 1000),
        price: price[4],
    }));

// Extract the array of prices to be used for calculating average.
let priceArray = dailyPrices.map((x) => x.price);

// Moving average function that returns moving average determines by `len` days
const ma = (numArray, pos, len) => {
    return (
        numArray.slice(pos, pos + len).reduce((prev, curr) => prev + curr) / len
    );
};

// Use map(x,idx) and pass indx into ma as position
const maPrices = dailyPrices
    .slice(0, dailyPrices.length - 10)
    .map((x, idx) => ({
        date: x.date,
        price: ma(priceArray, idx, 10),
    }));

console.log(maPrices);
