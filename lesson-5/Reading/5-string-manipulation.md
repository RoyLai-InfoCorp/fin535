# String Manipulation

This lesson will look at different ways of manipulating strings. Recall that string is a primitive type and is immutable, therefore these manipulation techniques result in the creation of new string values.

## 1. String concatenation

* 2 strings can be concatenated into 1 using the `+` operator.

    ### Example

    ```js
    let a = '12345';
    let b = '67890';
    console.log(a+b);   // will show '1234567890'
    ```

## 2. String interpolation

* When a complex string is formed by combining string literals and string expressions, the easier way is to use a `template literal`.

* A template literal is a string literal enclosed using back tick(`) instead of double or single quotes.

* A template literal contains embedded expression that is represented by ${expression}, which can be substituted by an expression.

* This syntax is called `string interpolation`.

    ### Example

    ```js
    var greetings = 'Hi, ';
    var name = 'Bob';
    var job = 'Teacher';
    var template = `${greetings}, my name is ${name} and I am a ${job}`.
    ```

## 3. `slice()` vs `substring()` vs `substr()`

* There are 3 ways to extract a substring from a string using string array methods in Javascript - `substr()`, `substring()` and `slice()`.

* There are very subtle difference between the 3 and it can be easy to be confused. Using `slice()` is preferred.

  -   **substr(start, length)** - This is the legacy version of substring function. The main difference is that it uses length for its second parameter.

  -   **substring(start, end)** - The difference between substring and substr is that the second parameter refers to the index of the character after the substring.

  -   **slice(start, end)** - (preferred) Slice and substring is very similar. The only difference is when start and end are negative values then the position of the index starts counting from the end of the string instead of the front.

## Lab 5a: Substrings

1. Create the file `5a-substrings.js`.

2. Given the string "The quick brown fox jumps over the lazy dog", write the Javascript to find all possible ways to:
    i. Use substr() to extract the substring "dog".
    ii. Use substring() to extract the substring "dog".
    iii. Use slice() to extract the substring "dog".

**Answer:**

```js
const a = "The quick brown fox jumps over the lazy dog"

// using substr
console.log(a.substr(40,3));
console.log(a.substr(40));

// using substring
console.log(a.substring(40,43));
console.log(a.substring(40));

// using slice
console.log(a.slice(-3));
console.log(a.slice(40,43));
```

