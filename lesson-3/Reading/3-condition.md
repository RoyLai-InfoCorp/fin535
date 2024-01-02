# Condition

## 1. `If ... else ...`  Condition

The `if... else...` syntax is used to create different execution path depending on a true/false condition.

#### Syntax

```js
    if (condition)
    {
        execute if condition is true
    }
    else
    {
        execute if condition is false
    }
```

#### Example

```js
    let a = 123
    if (a == 123)
        console.log('a is 123');
    else if (a < 123)
        console.log('a is less than 123');
    else
        console.log('a is greater than 123');
```

---

## 2. Truthy vs Falsy

In Javascript, there can be multiple types of values that can be interpreted as `true` or `false`. Again, this can create pitfalls for inexperience Javascript developers.

In Javascript, `falsy` refers to the set of values (not just the boolean type `false`) that is treated as false. These values include:
* **false**
* **0**
* **-0**
* **0n**
* **""**
* **null**
* **undefined**
* **NaN**.

All values are `Truthy` if not falsy.

---

## Lab 3a: Test for falsy condition

1. Create and run the file `3a-falsy.js`. Note: The `!` operator means `NOT`. We can use `if (!a)...` to test if a result is false. The following code will show all results where a is treated as false.

    ```js
    let a;
    if (!a) console.log("undefined is falsy");

    a = false;
    if (!a) console.log("false is falsy");

    a = 0;
    if (!a) console.log("0 is falsy");

    a = null;
    if (!a) console.log("null is falsy");

    a = "";
    if (!a) console.log("'' is falsy");

    a = undefined;
    if (!a) console.log("undefined is falsy");
    ```
---

## Lab 3b: Misinterpreting Falsy condition

The purpose of this lab is to becareful of the interpretation of true and false conditions when writing Javascript.

1. Create and run the file `3b-falsy.js`.

    ```js
        var a = false;
        var b = "false";
        if (a) 
            console.log("a is truthy");
        else 
            console.log("a is falsy");
        if (b) 
            console.log("b is truthy");
        else 
            console.log("b is falsy");
        
        // What is the output?
    ```

    Why is b not falsy?

    **Answer**

    `false` is a non-empty string therefore is not `falsy`

---

## 3. Strict equality `===` vs equality `==`

In Javascript, equality (`==`) operator always tries to convert operands to the same type before comparing. Strict equality (`===`) always consider operands of different type to be different.

### Example 1

In this example, `11` is treated as equal to the number 11.

```js
    if ("11" == 11) {
        console.log("The string `11` is equal to the number 11");
    }
    else {
        console.log("The string `11` is not equal to the number 11");
    }
   
    // output:
    // The string '11' is equal to the number 11
```

This is due to Javascript's inherent feature called `type coercion` which implicitly try to convert expressions to a common type for processing.

This is can lead to undesirable side effects. For example, when the string is a hexadecimal number, the numeric value of `11` is 17 and is not equal to the number 11.

### Example 2

In this example, `11` is not equal to the number 11 using the `===` operator. Therefore, you should use `===` instead of `==` in general.

```js
    if ("11" === 11) {
        console.log("The string `11` is strictly equal to the number 11");
    }
    else {
        console.log("The string `11` is strictly not equal to the number 11");
    }

    // output:
    // The string '11' is equal to the number 11
    // The string '11' is strictly not equal to the number 11
```

---

## 4. Other Logical operators

#### Syntax

- (express A) : condition is true if A is true.

- (!expression A) : `!` (NOT) operator. Condition is true if A is false.

- (expression A && expression B) : `&&` (AND) operator. Condition is true if A and B are both true;

- (expression A || expression B) : `||` (OR) operator. Condition is true if A is true, or B is true, or both A and B are true;

#### Example

```js
    let a = true;
    let b = false;

    let notA = !a;  
    console.log(notA)   // Since a is true, then notA is false

    let or = a || b;    // Since a is true, then or is true
    console.log(or);

    let and = a && b;   // since b is false, then and is false
    console.log(and);
```
