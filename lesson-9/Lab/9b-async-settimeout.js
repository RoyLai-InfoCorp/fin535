// Wait until `ms` milliseconds of time has passed. Date.now() returns
// number of milliseconds elapsed since Jan 1, 1970 00:00:00 UTC
const wait = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
};

// f1, f2 and f3 are long running processes
const f1 = () => {
    wait(2000);
    console.log("f1");
};
const f2 = () => setTimeout(() => console.log("f2"), 4000);
const f3 = () => {
    wait(2000);
    console.log("f3");
};

// Run f1, f2 and f3 in sequence and show elapsed time
const timeStart = Date.now();
console.log(`Start`);
f1();
f2();
f3();
const timeEnd = Date.now();
console.log(`Stop`);
console.log(`Total time elapsed: ${timeEnd - timeStart}`);
