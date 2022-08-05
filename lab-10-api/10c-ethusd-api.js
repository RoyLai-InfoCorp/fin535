const express = require("express");
const axios = require("axios");
const app = express();
const { maPrices, getDailyPrices } = require("./maPrices.js");
const cors = require('cors');
app.use(cors());

// Create the daily endpoint
app.get("/daily", async (req, res) => {
    // get daily price from CryptoWatch
    const response = await axios.get(
        "https://api.cryptowat.ch/markets/bitfinex/ethusd/ohlc?periods=86400"
    );
    const json = response.data;

    // extract daily prices
    const result = getDailyPrices(json);
    res.send(result);
});

// Create the ma endpoint
app.get("/ma/:days", async (req, res) => {
    try {
        // get daily price from CryptoWatch
        const response = await axios.get(
            "https://api.cryptowat.ch/markets/bitfinex/ethusd/ohlc?periods=86400"
        );
        const json = response.data;

        if (json) {
            // if days is provided, get the moving average, else return dailyPrice
            let result;
            if (!req.params.days) {
                result = getDailyPrices(json);
            } else {
                result = maPrices(json, parseInt(req.params.days));
            }

            res.send(result);
        }
    } catch (e) {
        console.error(e);
        res.send(e.toString());
    }
});

var server = app.listen(5050, function () {
    console.log("Service running at port:", server.address().port);
});
