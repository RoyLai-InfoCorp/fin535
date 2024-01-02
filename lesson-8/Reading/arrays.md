# Arrays

An array is an object representing a collection of items under a single variable name.

## Creating Arrays

### Array Literal Syntax

This is the syntax to create an initialise an array explicitly.

```js
// create array using literals
let a = [1, 2, 3, "four", "five", { name: "Bob", job: "Pilot" }]; // This will create an array of mixed types of 6 items
// create array by constructor
```

### Array constructor

```js
let b = new Array(10); // This will create an array of 10 empty items
```

---

## Accessing Array Elements

You can access an element in an array using the `bracket` notation with an integer for the index(position). The first item of an array starts from index(position) 0.

```js
a[0]; //this will return 1
a[3]; //this will return 'four'
a[5]; // this will return {name:'Bob',job:'Teacher'}
```

---

## Updating Array Elements

### splice() method

Splice is a general purpose array method that can be used to add to or remove items from any position in an array.

#### Syntax

```js
array.splice(start, deleteCount, item1, ..., itemN)
```

-   `start` refers to the position to start changing the array. (+ve starts counting from the beginning, -ve starts counting from the end)
-   `deleteCount` refers to the length of items to delete from `start`
-   `item1,...,itemN` refers to the items to insert.

#### Example

```js
// 1. Add the item 'front-item' to front using splice()
a.splice(0, 0, "front-item");
// result : [  'front-item',  1,  2,  3,  'four',  'five',  { name: 'Bob' job: 'Pilot' }]

// 2. Remove the item 'front-item' from the front using splice()
a.splice(0, 1);
// result : [  1,  2,  3,  'four',  'five',  { name: 'Bob' job: 'Pilot' }]

// 3. Add the item 'last-item' to the end using splice()
a.splice(a.length, 0, "end-item");
// result : [  1,  2,  3,  'four',  'five',  { name: 'Bob' job: 'Pilot' }, 'end-item']

// 4. Remove item 'last-item' from the end using splice()
a.splice(a.length - 1, 1);
// result : [  1,  2,  3,  'four',  'five',  { name: 'Bob' job: 'Pilot' }]

// 5. Insert the item 'middle-item' at the 3rd position
a.splice(4, 0, "middle-item");
// result : [  1,  2,  3,  'four', 'middle-item', 'five',  { name: 'Bob' job: 'Pilot' }]

// 6. Delete the item 'middle-item' from the 3rd position
a.splice(4, 1);
// result : [  1,  2,  3,  'four',  'five',  { name: 'Bob' job: 'Pilot' }]
```

#### Note

-   You can also add or remove items from the back of array using push() and pop() respectively.
-   You can add or remove from the front using shift() and unshift() respectively.

---

## Other Array Methods

### 1. `length()` method

This is used to get the length of an array.

#### Syntax

```js
array.length(start, deleteCount, item1, ..., itemN)
```

#### Example

```js
a.length(); //this will return 6
b.length(); //this will return 10
```
---

### 2. `find()` method

find() returns the first element in the provided array that satisfies the provided testing function.

#### Syntax

```js
// f is a testing function that returns a boolean result
array.find(f);
```

#### Example

```js
let person = array.find((p) => p.name === "Bob");
// person is { name: 'Bob', job: 'Pilot' }
```
---

### 3. `filter()` method

filter() creates a new array with all elements that pass the testing function.

#### Syntax

```js
// f is a testing function that returns a boolean result
array.filter(f);
```

#### Example

```js
let list = a.filter((x) => typeof x === "number");
// list is [1, 2, 3]
```

---

### 4. `map()` method

map() creates a new array of objects based by transforming each element in array.

#### Syntax

```js
// f is a transformation function that transforms each element of an array
const f = (item, index)=>{
    ...
    return newItem;
}
array.map(f);
```

#### Example

```js
let list = a.map((x, idx) => {
    const o = { value: x, position: idx };
    if (typeof x === "number") o.type = "number";
    else if (typeof x === "string") o.type = "string";
    else o.type = "object";
    return o;
});


// output
//[
//  { value: 1, position: 0, type: 'number' },
//  { value: 2, position: 1, type: 'number' },
//  { value: 3, position: 2, type: 'number' },
//  { value: 'four', position: 3, type: 'string' },
//  { value: 'five', position: 4, type: 'string' },
//  { value: { name: 'Bob', job: 'Pilot' }, position: 5, type: 'object' }
//]
```
---

### 5. `forEach()` method

foreach() does not return result but is used to iterate through the array and run a callback function on each element.

#### Syntax

```js
// f is a callback function that will be executed for each element in the array.
const f = (item, index)=>{
    ...
    return newItem;
}
array.forEach(f);

```

#### Example

```js
a.forEach((x,idx)=>{
    console.log(`pos:${idx} value:${x}`)
})
```

### 6. `reduce()` method

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

#### Syntax

```js
const reducer = (prev,curr) => {
    ...
    return result;
}
array.reduce(reducer, initialValue)
```

The reducer takes in 2 parameters: `prev` and `curr` and iterate every items in the array to return a single value. The value of the current iteration is derived from result of previous iteration `prev` and the current value `curr` in the array.

#### Example

Here is an example that returns that total sum of an array of numbers.

```js
const num = [1,2,3,4,5];
const total = num.reduce((prev,curr)=> prev + curr);
console.log(total)
```
---

### 7. `slice()` method

slice() is used to extract a subarray from an array by start and end position. 

#### Syntax

```js
array.slice(start,end)
```

#### Example

```js
const num = [1,2,3,4,5]
const slice1 = num.slice(0,3);  // this returns [1,2,3]
const slice2 = num.slice(1,4);  // this returns [2,3,4]
const slice3 = num.slice(2,5);  // this returns [3,4,5]
```

### 7. `reverse()` method

reverse() is used to reverse an array. **Note:** This function will mutate the original array. Consider making a copy of the original before using it.

#### Syntax

```js
array.reverse()
```

#### Example

```js
const num = [1,2,3,4,5]
num.reverse();
console.log(num);  // this returns [5,4,3,2,1]
```

---

## Lab 8a: Create Daily ETHUSD price array (15min)

In this lab session, the **objective** is to use the historical ETHUSD data extracted from  CryptoWatch to construct an array of objects containing 2 properties `date` and `price` in descending order by `date`.
`date` is to be represented as a string in `yyyy-mm-dd` format.
`price` is a number representing the end of day USD price of ETH.


1. Download the test data file from https://raw.githubusercontent.com/RoyLai-InfoCorp/fin535/main/fin535-ethusd.json from terminal

    ```sh
    $ wget https://raw.githubusercontent.com/RoyLai-InfoCorp/fin535/main/fin535-ethusd.json
    ```

    The file contains ETHUSD candlestick data represented in JSON format that looks similar to this.

    ```json
    {
        "result":{
            "86400":[
                [1458086400,12.645,13.421,11.98,13.1,10895.36,0],
                [1458172800,13.1,13.89,12.409,12.548,6127.951,0],
                [1458259200,12.548,12.62,10.436,11.06,26283.299,0],
                [1458345600,11.08,11.198,8.338,10.99,45318.516,0],
                [1458432000,10.99,11.17,9.776,10.573,19636.695,0],
    ....
    }
    ```

    JSON is created by serializing a Javascript object into a string. In other words, it is the string representation of an object. Once the JSON string is loaded into a Javascript variable, it can be accessed like any Javascript object.

2. Create the file `8a-ethusd-daily.js`.

3. Load the JSON data into a javascript object. The keyword `require` can be used to import an external module(package) to be used by the code or, in this case, importing a JSON file into a Javascript object.

```js
// This is used to import the JSON file into a javascript object
const json = require('./fin535-ethusd.json'); 
```

4. The structure of the JSON data is as follows:
   * The object contain a property `result`.
   * The object from `result` contains a property `86400`. There is no need to associate any meaning to this number but it represents the number of seconds in one day.
   * The property `86400` contains an array of array with each inner array representing the Open-High-Low-Close candlestick price represented by 7 values in this order:
        *  [0] = CloseTime
        *  [1] = OpenPrice
        *  [2] = HighPrice
        *  [3] = LowPrice
        *  [4] = ClosePrice
        *  [5] = Volume
        *  [6] = QuoteVolume
    * To construct the daily end of day price using this data, we only require the CloseTime and ClosePrice.

    #### Example

    ```js
    // This is used to load the file directly into a javascript object
    const json = require('./fin535-ethusd.json'); 
    
    // This will read and display the CloseTime and ClosePrice for the 1st array
    const price0 = json.result['86400'][0];
    console.log('CloseTime: ',price0[0]);
    console.log('ClosePrice: ',price0[4]);
    ```



5. Notice that the CloseTime is represented as a large number. This number is representing time in seconds. We will use the `date2string` module created in **lab 7**  to convert the string into `yyyy-mm-dd` format. 

6. Copy `date2string.js` from lab 7 into current folder and import into the script.

    ```js
    // This is used to load the file directly into a javascript object
    const json = require('./fin535-ethusd.json'); 
    const date2string = require('./date2string.js'); 
    
    // This will read and display the CloseTime and ClosePrice for the 1st array
    const price0 = json.result['86400'][0];

    // The date is in seconds by the function expects milliseconds so muliply 1k
    console.log("CloseTime: ", date2string(price0[0] * 1000));
    console.log('ClosePrice: ',price0[4]);

    ```

    The result should show:

```sh
CloseTime:  16-2-2016
ClosePrice:  13.1
```

7. Now that we are able to successfully extract and parse a single date price, we will apply the same logic to create a new array containing object {date, price}.

    * Notice that the data provided are listed in ascending order by time, we will use the `array.slice().reverse()` function to reverse the order of the array. The purpose of using `slice()` before reversing is to create a new copy so that reverse will not mutate the original copy.

    * We will then construct a new array by chaining the result using the `array.map()` function.

    ```js
    array.map((price) => ({
        date: date2string(price[0] * 1000),
        price: price[4],
    }))
    ```

    The final JS code is shown below.

    ```js
    // This is used to load the file directly into a javascript object
    const json = require("./fin535-ethusd.json");
    const date2string = require("./date2string.js");

    // This will read and create a new array of {date, price} object
    const dailyPrices = json.result["86400"].slice().reverse().map((price) => ({
        date: date2string(price[0] * 1000),
        price: price[4],
    }));
    console.log(dailyPrices);
    ```

---

## Lab 8b: Create 10-Day Moving Average Array (15min)

The purpose of this lab is to make further use of the array functions to compute 10-day moving average using the daily price data created in previous lab.

The 10-day moving average is simply the average of last 10 days of ETHUSD from a particular date. For example, the moving average price on 2022-05-30 is the average of the daily prices from 2022-05-21 to 2022-05-30 and the moving average on 2022-05-01 is the average from 2022-04-22 to 2022-05-01.

The script should return JSON object called "ETHUSD" that contains an array for 30 days of date-10ma value and date should be in `yyyy-mmm-dd` format.

Example:

```sh
$ node daily.js

{
    "ETHUSD": [
        {
            "date":"2022-05-01",
            "10-ma":"xxxxx"
        },
        {
            "date":"2022-05-02",
            "10-ma":"xxxxx"
        },
        ...
    ]
}
```

1. Copy and paste from `8a-ethusd-daily.js` into `8b-ethusd-10ma.js` and open `8b-ethusd-10ma.js` in VS Code.

2.  Use `array.reduce()` and `array.slice()` to create a moving average function `ma` that returns the average of an array given 3 parameters:

      * numArray - an array of numbers
      * pos - the index (position) of an item in the array
      * len - the number of items after `pos`

```js
const num = [1,2,3,4,5]
const ma = (numArray, pos, len)=>{
    return numArray.slice(pos,pos+len).reduce((prev,curr)=>prev+curr)/len;
}
// this will return the moving average of 3 values
console.log(ma(num,0,3))    // average([1,2,3])=2
console.log(ma(num,1,3))    // average([2,3,4])=3
console.log(ma(num,2,3))    // average([3,4,5])=4
```

3. Complete the code by applying the ma function to return 10-day moving average of the ETHUSD price.

**Answer**

```js

// This is used to load the file directly into a javascript object
const json = require("./fin535-ethusd.json");
const date2string = require("./date2string.js");

// This will read and create a new array of {date, price} object
const dailyPrices = json.result["86400"].slice().reverse().map((price) => ({
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

```

---

## Lab 8c. Export the functions as a module

We will be using this 10-day moving average function to create an API service in the next lesson. But before that, we will generalise the functions and export it via a module so that it can be reusable.

1. Create the file `maPrices.js` in VS Code.

    ```js
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
    ```

2. Create a function called `getDailyPrices` that will take in a `json` object representing the raw price data and return an array of **{date,price}** object in ascending order by date.

    **ANSWER:**

```js
// This will read and create a new array of {date, price} object
const getDailyPrices = (json) =>
    json.result["86400"]
        .slice()
        .reverse()
        .map((price) => ({
            date: date2string(price[0] * 1000),
            price: price[4],
        }));

```

3. Create a function called `maPrices` that will take in 2 parameters: a `json` object representing the raw price data and a `days`integer representing the moving average days. This will generalise the function to compute moving averages for any number of days. At the same time, we will also include the `date2string` function into this module so that a single module can provide all the functions that we will subsequently need.

    **ANSWER:**

```js
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
```

4. Export the function in a module.

```js
module.exports = { date2string, getDailyPrices, maPrices, ma };
```

5. Create the file `8c-ethusd-import.js`. Create the Javascript code on your own by importing `maPrices` and using it to compute the 10-day moving average.

**ANSWER:**

```js
// This is used to load the file directly into a javascript object
const json = require("./fin535-ethusd.json");
const { maPrices } = require("./maPrices.js");
const ma10 = maPrices(json,10);
console.log(ma10);
```

