const axios = require("axios");
require('dotenv').config();
let response = null;
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(
            "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=eth",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": process.env.X_CMC_PRO_API_KEY,
                },
            }
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
        console.log(
            `The ETH price is ${response.data?.data?.ETH[0].quote.USD.price} quoted at ${response.data?.data?.ETH[0].last_updated}`
        );
        resolve(json);
    }
});
