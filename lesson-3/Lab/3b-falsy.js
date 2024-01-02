var a = false;
var b = "false";
if (a) console.log("a is truthy");
else console.log("a is falsy");
if (b) console.log("b is truthy");
else console.log("b is falsy");

// Why is b not falsy?
// Answer: "false" is a non-empty string therefore is not falsy.