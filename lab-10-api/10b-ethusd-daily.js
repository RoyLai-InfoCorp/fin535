const axios = require("axios");
const { date2string } = require("./maPrices.js");
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(
            "https://api.cryptowat.ch/markets/bitfinex/ethusd/ohlc?periods=86400"
        );
    } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
    }
    if (response) {
        // success
        const json = response.data;
        const dailyPrices = json.result["86400"]
            .slice()
            .reverse()
            .map((price) => ({
                date: date2string(price[0] * 1000),
                price: price[4],
            }));
        console.log(dailyPrices);
        resolve(json);
    }
});
