// Wait until `ms` milliseconds of time has passed. Date.now() returns
// number of milliseconds elapsed since Jan 1, 1970 00:00:00 UTC
const waitAsync = async (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

// f1, f2 and f3 are long running processes
const f1 = async () => {
    await waitAsync(2000);
    console.log("f1");
};
const f2 = async () => {
    await waitAsync(4000);
    console.log("f2");
};
const f3 = async () => {
    await waitAsync(2000);
    console.log("f3");
};

// Run f1, f2 and f3 in sequence and show elapsed time
(async () => {
    const timeStart = Date.now();
    console.log(`Start`);
    await f1();
    await f2();
    await f3();
    const timeEnd = Date.now();
    console.log(`Total time elapsed: ${timeEnd - timeStart}`);
    console.log(`Stop`);
})();
