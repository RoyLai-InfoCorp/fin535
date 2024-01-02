# Objects

Javascript supports 2 groups of data types: primitives and objects. A JavaScript object is a mapping between keys and values.

## Creating objects

### 1. Object Liternal Syntax

This is the syntax to explicitly create and initialise an object. That is why it is also known as initializer notation.

#### Example

```js
// This creates an empty object
let empty = {};

// This creates an object with 3 properties(2 string, 1 number) and 1 method(function)
// and assign to person1
let person = {
    name: "Bob",
    job: "Pilot",
    age: 30,
    greet: function() { console.log("hello world!"); }
};
//{ name: 'Bob', job: 'Pilot', age: 30 }
```

---

### 2. Constructor function

Objects can also be created using a constructor function. A constructor function is an object that creates an instance of another object from a `prototype`. It has to be used with the `new` keyword.

#### Example

```js
// Object() is a constructor used to create object of Object type.
// This creates an empty Object and assign to person2
let person = new Object();

// Object properties can be added directly to the object.
person.name = "Bob";
person.job = "Pilot";
person.age = 30;
person.greet = function() { console.log('hello world!'); }

// { name: 'Bob', job: 'Pilot', age: 30 }
```

---

## Object Properties

The state of an object is maintained as key-value pairs within the object. The key for accessing the value is called known as the object's `property`.

### 1. `dot` Accessor Notation

The properties of an object can be accessed using the `dot` accessor notation followed by the property name.

```js
console.log(person.name); // This will return 'Bob'
```

### 2. `bracket` Accessor Notation

It can also be accessed using the `bracket` accessor notation with the property's string name.

```js
console.log(person["name"]); // This will also return 'Bob'
```

---

### 3. Create Properties

Javascript objects are dynamic that means you can add or remove properties directly from the object. Object `properties` are variables attached to the object.

#### Example 1

Create a new property using dot notation.

```js
var person.email='bob@somewhere.com'
console.log(person)                 // This will return { name: 'Bob', job: 'Teacher', age: 30, email: 'bob@somewhere.com' }
```

#### Example 2

Since property names are essentially string values, it is possible to create property using any string names.

```js
person["bob@somewhere.com"] = {
    account: "bob",
    domain: "somehwere.com",
};
```

The result looks like this:

```js
{
    name: 'Bob',
    job: 'Teacher',
    age: 30,
    email: 'bob@somewhere.com',
    'bob@somewhere.com': { account: 'bob', domain: 'somehwere.com' }
}
```
---

#### Lab 6a: Accessing Object Property With Brackets

1. Create `6a-bracket-accessor.js`

    ```js
    let person = {
        name: "Bob",
        job: "Teacher",
        age: 30,
        email: "bob@somewhere.com",
        "bob@somewhere.com": { account: "bob", domain: "somehwere.com" },
    };

    ```

2. Write the Javascript code to access and display the value of 'bob@somewhere.com' property.

**Answer:**

* Since 'bob@somewhere.com' doesn't comply with Javascript's grammatical rule, it cannot be accessed using the `dot` accessor notation `person.bob@somewhere.com` but it can still be accessed using the `bracket` accessor notation, `person["bob@somewhere.com"]`.

    ```js
    let person = {
        name: "Bob",
        job: "Teacher",
        age: 30,
        email: "bob@somewhere.com",
        "bob@somewhere.com": { account: "bob", domain: "somehwere.com" },
    };

    //person.bob@somewhere.com              // this will fail with Invalid or unexpected token
    console.log(person["bob@somewhere.com"]);
    ```

---

## Object Methods

Javascript objects can contain functions. A function assigned to an object's property is known as the object's `method`.

### 1. Create Methods

The way to create a method is similar to the way property is created.

#### Syntax

To create a method `m` for an object `obj`, assign a function express to m.

```js
    obj.m = function (...parameters){
        ...
        return something
    }
```

---

### 2. `this` keyword

`this` keyword can be used by the method to access properties from the same object.

```js
    const travel = function(destination){
        console.log(`${this.name} travels to ${destination}`);
    }

    const alice = { name: 'Alice' }
    alice.travel = travel;

    // Because the travel method belongs to 'alice', `this.name` 
    // refers to the name property of the current object, which is `Alice`.
    // This will return `Alice travels to work`
    alice.travel('work')


    const bob = { name: 'Bob' }
    bob.travel = travel;
    // This will return `Bob travels to work` because the travel 
    // method belongs to the object bob.
    bob.travel('work')

```

**NOTE:**

* Do not use arrow functions to declare methods because it doesn't support `this`.

* In the following example, f1 is a method created using function expression and `this` is displayed as the value of `o`. But in f2, `this` is displayed as empty `{}`

    ```js
    // object method
    const o = {
        f1: function(){
            console.log(this);
        },
        f2: ()=>{
            console.log(this);
        }
    }

    // This will return o's value.
    o.f1();
    // This will return {}
    o.f2();
    ```

---

## Reference vs Value

### 1. Object Reference

An object variable is a reference to an object. Therefore, assigning an object variable to another variable is assigning the same reference to the object to the new variable.

```js
let personRef = person;
personRef.name = "Alice";
console.log(person);
// This will return { name: 'Alice', job: 'Pilot', age: 30 } because mutating personRef is equivalent to mutating person.
```

### 2. Object value

To create a copy of `person`, instead of reference, the object has to be cloned using original object's properties.

```js
let clone = {
    person.name,
    person.job,
    person.age
}
clone.name = 'Charlie';
console.log(clone);
// This will return { name: 'Charlie', job: 'Pilot', age: 30 }. The cloned copy is mutated.
console.log(person);
// This will return the original { name: 'Alice', job: 'Pilot', age: 30 }. The original copy is not mutated.
```

---

### 3. Spread `...` Operator

The `...` (spread) operator can be used to destructure an object into its properties. This is useful for cloning objects.

#### Example 1

Create a clone of person using the `...` operator.

```js
let clone2 = { ...person };
clone2.name = "David";
console.log(clone2);
// This will return { name: 'David', job: 'Pilot', age: 30 }. The cloned copy is mutated.
console.log(person);
// This will return the original { name: 'Alice', job: 'Pilot', age: 30 }. The original copy is not mutated.
```

#### Example 2

Extending or merging objects.

```js
let clone3 = {
    ...clone2,
    website: "david@website.com",
    hobbies: ["music", "sports"],
};
console.log(clone3);
// This will return {  name: 'David',  job: 'Pilot',  age: 30,  website: 'david@website.com',  hobbies: [ 'music', 'sports' ]}
```

---

## Lab 7d: Converting Date to String

In this lab, we will learn how to use the Javascript Date object to convert date into string.

   * In Javascript, Date objects contains a single moment in time in a platform-independent format represented by a number.
   * This number represents milliseconds since 1 January 1970 UTC. UTC means the timezone is GMT +0 and each day is 86,400,000 milliseconds. This date format is known as Unix Epoch.
   * The purpose of this lab is to demonstate how to convert a numeric date value into a date string of the form `yyyy-mm-dd` in GMT.

1. Create the file `7d-date-to-string.js`.

    ```js
    const date = 1458086400 * 1000; // epoch date in milliseconds
    ```

2. Create a Javascript Date object using CloseTime * 1000.

    ```js
    const d = new Date(date);
    ```

3. Extract year, month and date using getFullYear(), getMonth() and getDate() respectively from the date object. **NOTE:** getMonth() returns month with index starting from 0 to 11, add +1 to get the correct month.

    ```js
    const dd = d.getFullYear();
    const mm = d.getMonth()+1;
    const yyyy = d.getDate();
    ```

4. Concatenate the values using string interpolation.

    ```js
    const dateStr = `${yyyy}-${mm}-${dd}`
    console.log(dateStr);
    ```

    The result should display `2016-2-16`

## Lab 7e: Exporting function as reusable module

In this lab, we will learn how to export the date to string function into a module. A module in Node.JS is a library of objects that can be imported and reused by other Javascripts.

1. Create the file `date2string.js`.

2. Convert the date to `yyyy-mm-dd` logic into a `date2string` function.

```js
const date2string = (date)=>{
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = d.getMonth()+1;
    const dd = d.getDate();
    return `${yyyy}-${mm}-${dd}`;
}
```

3. Export as module.

    `module.exports` is a special object that is included in every Node.JS file by default. The above function `date2string` will be exported as a module that can be imported into other Javascript.

    ```js
    module.exports = date2string;
    ```

4. Create the file `7e-date-string-import.js` and run it.

    ```js
    const date2string = require("./date2string.js");
    const date = 1458086400;
    console.log(date2string(date * 1000));
    ```

    The result should return `2016-2-16` computed using the imported `date2string`
