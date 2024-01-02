# Primitives

Javascript is a dynamic type language. That means there is no need to declare variables with any type and the data type of variables can change at run-time.

Javascript supports 2 groups of data types: primitives and objects. Primitive types are immutable and are built-in types provided by the language. Immutable means that the value cannot be changed once assigned into a memory location.

There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

---

## 1. `undefined` Type

* `undefined` (without quote) is a value belonging to a special type - `undefined`. This is the default value assigned to any uninitialised variables.

    #### Example 1

    ```js
    let d;
    console.log(typeof d);  // this will return undefined
    ```

* To check whether a value is assigned any value, check if it has a type of undefined.

    #### Example 2

    ```js
    var a;
    console.log(typeof a); // undefined
    console.log(a); // undefined

    if (typeof a === "undefined") console.log("a is not assigned any value");
    ```

## 2. `null` Type

* `null` (without quote) represents an empty object.

    ### Example

    In the example below, the typeof b(null) returns an `object` but is actually a primitive due to legacy problem associated with `typeof`.

    ```js
    var b = null;
    console.log(typeof b); // null
    console.log(b); // object
    ```

## Lab 4a: null and undefined

1. Create `4a-null-vs-undefined.js`

    ```js
    var a;
    var b = null;

    if (!a) console.log("a is falsy and undefined");
    if (!b) console.log("b is falsy and null");
    if (a == b) 
        console.log("undefined is equal to null");
    else
        console.log("undefined is not equal to null");
    ```

    What is the output? Do you agree?

---

## 3. `boolean` Type

* Boolean represents only 2 types of value: true or false. **Note:** Boolean value must not be enclosed in quotes.

    ### Example

    In this example, we will display the type of a value using the `typeof` keyword.

    ```js
    let a = true; // a is a boolean type
    console.log(typeof a);

    let b = "true"; // b is a string type
    console.log(typeof b);

    let c = !a; // use !(NOT) operator to inverse a boolean type
    if (c === false) console.log("c is equal to false");
    ```

## 4. `number` Type

* Number type is used for integer and floating point numbers.

* Integer can be safely stored in the range of -(2^53-1) or Number.MIN_SAFE_INTEGER to 2^53-1 or Number.MAX_SAFE_INTEGER.

* Beyond these values, the number will be stored in double precision floating point format instead. If integer larger than these limits are required, then the number has to be stored as BigInt type.

* An invalid number will result in `NaN` (Not-A-Number). For example, division by zero will result in NaN. Becareful when using `NaN` for equality comparison because the result is always false if either side of the comparison is `NaN`.

## Lab 4b: Number bigger than MAX_SAFE_INTEGER

The purpose for this lab is to understand what happens when a number is bigger than MAX_SAFE_INTEGER.

1. Create `4b-max-safe-int.js` and run it.

    ```js
    const a = Number.MAX_SAFE_INTEGER + 1;
    const b = Number.MAX_SAFE_INTEGER + 2;
    if (a === b) console.log("a is equal to b");
    else console.log("a is not equal to b");
    ```

    What is the output? Do you agree?

## 5. `bigint` Type

* A `bigint` type is used when an integer is required that exceeds to Number.MAX_SAFE_INTEGER value.

* A `bigint` is can be created using a literal by appending `n` to the end of an integer, or by calling the BigInt() constructor.

## Lab 4c: Number vs BigInt

1. Create `4c-number-vs-bigint.js` and run it.

    ```js
    const a = 123;
    console.log(typeof a);
    const b = 123n;
    console.log(typeof b);
    if (a === b) console.log("The number 123 is equal to the bigint 123");
    else console.log("The number 123 is not equal to the bigint 123");
    ```

    What is the output? Do you agree?

## 6. `string` Type

* A string is stored internally as an array of double byte characters.

* String literals can be created using double or single quote, ie. '12345' and "12345" are equivalent.

* string characters are double-byte because it uses UTF-16 unicode format to represent characters beyond the english alphabet. For instance, the chinese character '我' cannot be represented using a single byte character.

    ### Example

    ```js
    var a = "我";
    console.log(a.length); // this will return 1.
    console.log(a.charCodeAt(0)); // this will return 25105. 
    // That means the character '我' is stored internally as 25105 which
    // requires 2 bytes.
    ```

* Strings are immutable in Javascript.

    ### Example

    ```js
    var a = "12345";
    console.log(a[4]);
    // The first output will return '5' which is the 5th character in the string.

    a[4] = "6";
    console.log(a);
    // The second ouput will return '12345' even though a new character was assigned to the 5th character because strings are immutable.
    ```
