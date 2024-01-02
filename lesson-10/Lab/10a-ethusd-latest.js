const axios = require("axios");
let response = null;
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(
            "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=eth",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "6f264439-7c1a-4e82-a6f1-4bcd7aeaa6d9",
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
