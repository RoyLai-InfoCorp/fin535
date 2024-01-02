// Using Math.pow --------------------------------------------------------------

// Math.pow(10, 10) will return a number (integer)
let a = Math.pow(10, 10);
console.log(a + " has typeof " + typeof a);

// Math.pow(10, 32) will return a number (floating point) but not a big integer
let b = Math.pow(10, 32);
console.log(b + " has typeof " + typeof b);

// Math.pow(10n, 32n) will throw the error cannot convert a BigInt value to a number
let c = Math.pow(10n, 32n);
console.log(c + " has typeof " + typeof c);

// Using ** operator --------------------------------------------------------------

// 10 ** 10 will return a number (integer)
let a = 10 ** 10;
console.log(a + " has typeof " + typeof a);

// 10 ** 32 will return a number (floating point) but not a big integer
let b = 10 ** 32;
console.log(b + " has typeof " + typeof b);

// 10n ** 32n will return a big integer
let c = 10n ** 32n;
console.log(c + " has typeof " + typeof c);

// Using scientific notation (e) --------------------------------------------------------------

// 1e10 is equal to 10 ** 10
let a = 1e10;
console.log(a + " has typeof " + typeof a);
console.log(
    1e10 === 10 ** 10
        ? "1e10 is equal to 10 ** 10"
        : "1e10 is not equal to 10 ** 10"
);

// 1e32 is equal to 10 ** 32
let b = 1e32;
console.log(b + " has typeof " + typeof b);
console.log(
    1e32 === 10 ** 32
        ? "1e32 is equal to 10 ** 32"
        : "1e32 is not equal to 10 ** 32"
);
