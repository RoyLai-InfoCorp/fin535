# Exponentiation

The use of exponentiation is common for blockchain and cryptocurrencies due to the common use of big numbers.
This section will show some of the ways used in exponentiation (ie. base to the power of exponent).

## Math.pow

The build-in function Math.pow() can only return a number

    ```js
    let a = Math.pow(10, 10);
    console.log(a + " has typeof " + typeof a);

    // Math.pow(10, 32) will return a number (floating point) but not a big integer
    let b = Math.pow(10, 32);
    console.log(b + " has typeof " + typeof b);

    // Math.pow(10n, 32n) will throw the error cannot convert a BigInt value to a number
    let c = Math.pow(10n, 32n);
    console.log(c + " has typeof " + typeof c);
    ```

## Exponentiation(**)

The exponentiation operator (**) can accept big number as operand.
NOTE: Do not confuse with `^` which is commonly used in text for exponentiation. In Javascript, `^` is an XOR operator.

    ```js
    // 10 ** 10 will return a number (integer)
    let a = 10 ** 10;
    console.log(a + " has typeof " + typeof a);

    // 10 ** 32 will return a number (floating point) but not a big integer
    let b = 10 ** 32;
    console.log(b + " has typeof " + typeof b);

    // 10n ** 32n will return a big integer
    let c = 10n ** 32n;
    console.log(c + " has typeof " + typeof c);
    ```

## Exponent Notation (`e`)

This is the least commonly used and is usually used for expressing floating point numbers in scientific notation.
The base is always 10 in this case and represents mantissa * 10 ** exponent.

    ```js
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
    ```

