// Wait until `ms` milliseconds of time has passed. Date.now() returns
// number of milliseconds elapsed since Jan 1, 1970 00:00:00 UTC
const promiseToWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// f1, f2 and f3 are long running processes
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

// Run f1, f2 and f3 in sequence and show elapsed time
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
