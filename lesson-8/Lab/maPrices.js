// Convert epoch date into `yyyy-mm-dd`
const date2string = (date) => {
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    return `${yyyy}-${mm}-${dd}`;
};

// Moving average function that returns moving average determines by `len` days
const ma = (numArray, pos, len) => {
    return (
        numArray.slice(pos, pos + len).reduce((prev, curr) => prev + curr) / len
    );
};

// This will read and create a new array of {date, price} object
const getDailyPrices = (json) =>
    json.result["86400"]
        .slice()
        .reverse()
        .map((price) => ({
            date: date2string(price[0] * 1000),
            price: price[4],
        }));

// This will return the moving average from daily price by number of days
const maPrices = (json, days) => {
    // This will read and create a new array of {date, price} object
    const dailyPrices = getDailyPrices(json);

    // Extract the array of prices to be used for calculating average.
    let priceArray = dailyPrices.map((x) => x.price);

    // Use map(x,idx) and pass indx into ma as position
    return dailyPrices.slice(0, dailyPrices.length - days).map((x, idx) => ({
        date: x.date,
        price: ma(priceArray, idx, days),
    }));
};

module.exports = { date2string, getDailyPrices, maPrices, ma };
