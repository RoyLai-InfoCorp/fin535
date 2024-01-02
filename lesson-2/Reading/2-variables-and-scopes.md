# Variables and Scopes

## Variables

Variables are used for storing and references. Variable names are case-sensitive, ie. the variable `aaa` is not the same variable as `AAA`.

### 1. Declare Variables

#### Syntax

```js
const variableName = something;
let variableName = something;
```

The keyword `const` is used for creating variables that are read-only and should always be preferred unless the variable value is expected to change during its lifetime.
The keyword `let` is used for creating variables that can change its value within its scope.

#### Example

```js
const a = 'aaa';
a = 'bbb';   // this will throw 'Assignment to constant variable' error.

let b = 'bbb';
b = 'aaa';

// use console.log to show value of variable.
console.log(b); // This will return 'aaa'
```

---

## Scopes

The variables's scope determines whether it's value can be accessible by other parts of the code.

Javascript can support 3 types of scopes: **global**, **local** and **block**.

### 1. Global Scope and Global Variables

Global scope is accessible from all parts of the code. Variables declared outside any function has the global scope and are known as **Global Variables**

#### Example

```js
// Declare a variable
let c = 'ccc';

// Declare a function
let func = ()=>{
    console.log(c);     // This will return 'ccc' because c is accessible anywhere.
}

```

### 2. Function Scope and Local Variables

Function scope is accessible only within the same function. Variables declared in function scope are known as **Local Variables**.

#### Example

```js

let func = ()=>{
    let d = 'ddd';
    console.log(d);     // This will return 'ddd' because d is used within the function.
}
// This will throw 'd is not defined' error because d is not accessible outside func()
console.log(d);         

```

---

### 3. Block Scope

Block scope is defined within brackets `{ }`. Variables declared inside a block cannot be accessed from outside the block.

#### Example

```js
let a = 123;

// The following block is executed if a is equal to 123
if (a == 123) {
    let a = 456;
    b = 789;
    let c = "abc";
}
console.log(a);
console.log(b);
console.log(c);

//What is the value of a, b and c?
// a = 123          because it is accessible the global `a` outside the {}
// b = 789          because `b` is global
// c = undefined    because `c` is scoped
```

**Important**

- **Avoid declaring any variables without using keywords.** Historically, variables can be declared without using any keywords. This will create a global variable by default.

- **Avoid declaring any variables without using the `var` keyword.** Historically, the `var` keyword is used to create global and local variables depending on its execution context. What does this means??

---

## Lab 2: Problem with using `var`

The purpose for this lab is to illustrate the unintented consequences of using `var` or variables without keywords. This can create very elusive errors that is difficult to troubleshoot. Since Javascript compiler excepts variables declared using `var` and without keywords as valid, therefore the developer must make it a habit to delcare variables explicitly using `let` and `const`.

### Lab 2a: Using var to declare local variable

1. Create the following in `2a-local-variable.js` then run using `node 2a-local-variable.js`

    ```js
    let func = ()=>{
        var a = 456;
    }
    func();
    console.log(a);
    ```

    This will throw an error `ReferenceError: a is not defined`. Why?

    **Answer:**

    By Javascript definition, variables defined using `var` is a local variable when it is used in a function.

### Lab 2b: Using var to unintentionally declare global variable

1. Create the following in `2b-global-variable.js` then run using `node 2b-global-variable.js`

    ```js
    if (true) {
        var a = 456;
    }
    console.log(a);
    ```

    This returns `456`. Why not an error?

    **Answer:**
    `var` only works for function block and not if block. Variables declared using `var` but not within function block becomes a global variable.

### Lab 2c: Uncaught errors when using undefined global variable

1. Create the following in `2c-hoisting.js` then run using `node 2c-hoisting.js`

    ```js
    console.log(b);
    ```

    This should throw an exception `ReferenceError: b is not defined`

    Change the file to the following then save and run again.

```js
console.log(b);
var b = 567;
```

    This did not throw an exception. Why?

    **Answer**

    In Javascript design, all global variables are moved to the top of the declaration before any code are executed. This is called `hoisting`. Therefore, no error will be thrown if the variable is declared as global anywhere in the code.
