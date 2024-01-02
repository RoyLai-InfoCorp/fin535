# Asynchronous Javascript

## 1. Synchronous Programming

In synchronous programming, each line of code are executed in sequence and execution is blocked until the line of code is completed. Therefore, the code will also complete in sequence.

## Lab 9a: Synchronous Programming

The purpose of this lab is to illustrate the effects of calling synchronous function.

1. Create the file 9a-async-wait.js

2. Create a function called `wait()` which does nothing in a while loop until a certain amount of time in milliseconds has passed. This function is synchronous because execution cannot continue until the while loop is exited.

    ```js
    // Wait until `ms` milliseconds of time has passed. Date.now() returns
    // number of milliseconds elapsed since Jan 1, 1970 00:00:00 UTC
    const wait = ms => {
        const end = Date.now() + ms
        while (Date.now() < end) continue
    }
    ```

3. Create the functions f1, f2 and f3 which simulate long running processes that completes in 2sec, 4sec and 2sec respectively.

    ```js
    // f1, f2 and f3 are long running processes
    const f1 = ()=> { wait(2000); console.log("f1"); } 
    const f2 = ()=> { wait(4000); console.log("f2"); }
    const f3 = ()=> { wait(2000); console.log("f3"); }
    ```

4. Run the functions in sequence and track the total elapsed time.

    ```js
    // Run f1, f2 and f3 in sequence and show elapsed time
    const timeStart = Date.now();
    console.log(`Start`);
    f1();
    f2();
    f3();
    const timeEnd = Date.now();
    console.log(`Stop`);
    console.log(`Total time elapsed: ${timeEnd - timeStart}`);
    ```

   * The output will look like this

    ```js
    Start
    f1
    f2
    f3
    Stop
    Total time elapsed: 8004    
    ```

    * f1(),f2() and f3() are executed in sequence and total execution time will take 8 sec.

---

## 2. Asynchronous Programming

In asynchronous programming, each line of code are executed in sequence but execution can continue without waiting for the current line of code to be completed.This is to allow other functions to execute while running functions with an unknown but potentially long duration. Therefore, the code may not complete in sequence.

In Javascript, asynchronous functions are implemented using `callback`. A `callback` is a function that is passed as a parameter to another function. The `callback` can be invoked from within the asynchronous function to continue with the next task after the current one is completed.

## Lab 9b: Asynchronous Programming

The purpose of this lab is to illustrates the effects of calling asynchronous function.

In this lab, we will replace the use of synchronous `wait()` with the Javascript build-in `setTimeout()` function. This is the asynchronous version of the wait() function that we have created in the earlier example. `setTimeout()` takes in 2 parameters - a callback function and a duration in milliseconds.

1. Copy the earlier file into the file `9b-async-settimeout.js`

2. Replace `wait()` with `setTimeout()` in f2 with a callback function `()=>console.log('f2')` with a duration of 4000 milliseconds.

    ```js
    const f1 = ()=> {wait(2000);console.log("f1");} 
    const f2 = ()=> setTimeout(()=>console.log("f2"),4000);
    const f3 = ()=> {wait(2000);console.log("f3");}
    ```

3. Run the script and the output is shown below.

    ```sh
    Start
    f1
    f3
    Stop
    Total time elapsed: 4003
    f2
    ```

4. Notice that the output from this example are out of sequence; f2 is displayed at the end instead of after f1. The total time elapsed is reduced to 4 seconds from of 8 seconds. Why?

---

### Lab 9c: Running asynchronous functions in sequence

The purpose of this lab is to understand how to execute asynchronous functions synchronously. For this lab, please create 3 asynchronous functions but the functions must be executed in sequence.

1. Create the file `9c-async-callback.js` and create the following on your own.

2. Create function f1 that waits asynchronously for 2 sec before displaying 'f1' and calls f2.

3. Create f2 that waits asynchronously for 4 sec before displaying 'f2' and calls f3.

4. Create f3 that waits asynchronously for 2 sec before displaying 'f3' and output the total elapsed time.

5. Run the functions and track the total elapsed time.

    * If the code is written correctly, the output will be:

    ```shell
    Start
    f1
    f2
    f3
    Stop
    Total time elapsed: 8000    
    ```

    NOTE: The total time will not be 8000 exactly due to slippage caused by running settimeout itself.

---

**Answer**

```js

const f1 = (f2) =>
    setTimeout(() => {
        console.log("f1");
        f2();
    }, 2000);

const f2 = (f3) =>
    setTimeout(() => {
        console.log("f2");
        f3();
    }, 4000);

const f3 = () =>
    setTimeout(() => {
        console.log("f3");
        const timeEnd = Date.now();
        console.log(`Total time elapsed: ${timeEnd - timeStart}`);
    }, 2000);

console.log("Start");
const timeStart = Date.now();

f1(() => f2(f3));

console.log(`Stop`);

```

---

## 4. Error Handling

Error handling in asynchronous functions is tricky because it cannot cannot be caught using try..catch statements. This is because the execution has exited from the try..catch block before the error can be caught.

```js
callback = ()=>{throw new Error('ERROR THROWN')}   // This callback will simulate an error
duration = 1000;                                   // 1000 milliseconds = 1 second

// Error from setTimeout will never be caught
try {
    setTimeout( callback, duration );
}
catch(e)
{
    console.log('ERROR CAUGHT FROM setTimeout()');
}
```

To catch errors from asynchronous function, the try..catch has to wrap around the callback instead.

```js
// Try..catch has to be used on the callback instead.
setTimeout(()=>{
    try {
        callback();
    }
    catch(e){
        console.log('ERROR CAUGHT FROM callback()');
    }}, duration);

```

That is why, 2 types of callback functions are usually passed to an asynchronous function. As callback to be executed when function is successful and a callback to handle error if it fails.

---

## 5. Promise

### Problems with passing callbacks as parameters

In earlier example, callbacks were passed into asynchronous functions as parameters. This can become increasingly difficult to write and maintain when the list of callback dependencies begin to grow. This is commonly known as `callback hell`.

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

### Attaching callbacks with Promise

The Javascript `Promise` object was created to make it easier when using callbacks in asynchronous functions. A Promise object allows you to attach callbacks to a Promise instead of passing success callbacks and error callbacks as parameters. Each function to be executed in sequence after call is called using `then()` method. Errors are caught using `catch()` method. This allows us to create a chain of Promises without using a pyramid of callbacks like the one above.

```js
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

---

### Making a Promise

A Promise object is created using the Promise() constructor with a function parameter `executor`.

```js
const promise = new Promise(executor);
```

The `executor` is a function with 2 callback parameters: resolve and reject. The executor function will be written to perform certain tasks.

The `resolve callback` is a function with a single parameter that can be invoked when the task is completed with result passed into it.

The `reject callback` is a function with a single parameter that is invoked when an error is caught and passed into it.

```js
const executor = (resolve, reject) => {
        try {
            let result = "executed";    // Task to be performed
            resolve(result);            // pass result into resolve callback
        } catch (e) {
            reject(e);                  // pass error into reject callback
        }
    } 
const promise = new Promise(executor);  // this returns a promise
```

**Note:** The Promise constructor will invoke the executor immediately when a promise is created. In order for a promise not to be invoked, for example until it is chained, wrap the promise in a function.

```js
const promiseFunc = () => new Promise(executor);    // this returns a function
```

Combining all the steps above result in the following:

```js
// Create promise function
const promiseFunc = () =>
    new Promise((resolve, reject) => {
        try {
            let result = "executed";
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
```

---

### Using a Promise

Call the function `promiseFunc()` and attach the resolve callback with `then()` followed by attaching the reject callback with `catch()`.

```js
// Using promise function
promiseFunc()
    .then((result) => {
        console.log("success:", result);
    })
    .catch((e) => console.error("error:", e));
```

#### Lab 9d: Asynchronous programming with Promise

The purpose of this lab is to illustrate how to use asynchronous functions with Promise instead of callbacks.

In previous lab, we used `setTimeout` and callback to wait asynchronously. Because `setTimeout` is a legacy Javascript function, there is no equivalent of a function that returns a Promise. In this lab, we will make a Promise out of setTimeout().

1. Create the file `9d-async-promise.js`

2. Create the `promiseToWait()` function using the code below. This function will create a promise object using the Promise constructor.

    ```js
    const promiseToWait = ms => new Promise(resolve => setTimeout(resolve, ms));
    ```

3. Replace f1, f2 and f3 with a function that creates a new Promise and replace `wait` with `promiseToWait`.

    ```js
    const f1 = () =>
        new Promise((resolve) => {
            promiseToWait(2000)
                .then(() => console.log("f1"))
                .then(resolve);
        });

    const f2 = () =>
        new Promise((resolve) => {
            promiseToWait(4000)
                .then(() => console.log("f2"))
                .then(resolve);
        });

    const f3 = () =>
        new Promise((resolve) => {
            promiseToWait(2000)
                .then(() => console.log("f3"))
                .then(resolve);
        });

    ```

4. Run the functions in sequence and track the total elapsed time.

    ```js
    console.log(`Start`);
    const timeStart = Date.now();
    f1()
        .then(f2)
        .then(f3)
        .then(() => {
            const timeEnd = Date.now();
            console.log(`Total time elapsed: ${timeEnd - timeStart}`);
        });
    console.log(`Stop`);
    ```

The output will look like this:

```sh
    Start
    Stop
    f1
    f2
    f3
    Total time elapsed: 8012
```

---

## 6. `async` and `await`

The way for creating asynchronous functions and the using of Promise can be expressed using the `async` and `await` keywords. This is the preferred way for asynchronous Javascript whenever available.

An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.

### Syntax

1. Create an asynchronous function using `async`.

    The `async` keyword is used to declare a function as asynchronous. By declaring a function as asynchronous, it is able to use `await` keyword to wait for Promise.

    ```js
    const func1 = async (param)=>{
        ...
    }
    ```

2. Calling an asynchronous function using `await`.

    The `await` keyword is used to wait for a Promise and `await` can only be used when its calling function is declared with `async`.

    ```js
    let result = await func1(param);
    ```

    Notice that the use of callbacks and Promises are transparent to the developer. However, in order to use `async` and `await` properly the developer needs a proper understanding of callbacks and Promise.

### Lab 9e: Asynchronous programming using async() and await()

This is the final lab on asychronous programming and illustrate the final technique of calling asynchronous functions using async and await as opposed to Promise and callbacks.

1. Create the file `9e-async-await.js`

2. Create the `async/await` version of `wait()` and call it `waitAsync`. The function is created by simply adding the `async` keyword to the function that returns a promise.

    Note: It is a convention to name async functions by superceding the name with `Async`.

    ```js
    const waitAsync = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
    ```

3. Create the functions f1,f2 and f3 without the use of Promise and callbacks by calling `await waitAsync()` like a synchronous function. Note the lines after await will not be executed before the awaiting call is completed. In order to use await, the functions must be declared using async.

    ```js
    const f1 = async()=>{
        await waitAsync(2000);
        console.log('f1');
    }
    const f2 = async()=>{
        await waitAsync(4000);
        console.log('f2');
    }
    const f3 = async()=>{
        await waitAsync(2000);
        console.log('f3');
    }
    ```

4. Finally, rewrite the way f1, f2 and f3 are called using `await`. The following code will executes f1 to f3 in sequence and return the elapsed time.

    Notice that since async cannot be declared for the global context, therefore the main code is wrapped within another arrow function which is declared as async. This way of creating a nameless function and executing it in the same statement is called `Immediately Invoked Function Expression`(IIFE).

    ```js
    (async ()=>{

        const timeStart = Date.now();
        console.log(`Start`);
        await f1();
        await f2();
        await f3();
        const timeEnd = Date.now();
        console.log(`Total time elapsed: ${timeEnd - timeStart}`);
        console.log(`Stop`);

    })();
    ```

---

### Error Handling with async/await

* One of the key advantage of using async/await is the ability to use try..catch for handling errors thrown from an asynchronous function which otherwise can only be caught by implementing the try..catch from within the callbacks.

    ```js
    try
    {
        await f1();
        await f2();
        await f3();
    }
    catch(e)
    {
        console.error(e);
    }
    ```
