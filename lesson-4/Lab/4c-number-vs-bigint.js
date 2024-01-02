const a = 123;
console.log(typeof a);
const b = 123n;
console.log(typeof b);
if (a === b) console.log("The number 123 is equal to the bigint 123");
else console.log("The number 123 is not equal to the bigint 123");
