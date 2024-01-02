var a = undefined;
var b = null;

if (!a) console.log("a is falsy and undefined");
if (!b) console.log("b is falsy and null");
if (a == b) console.log("undefined is equal to null");
else console.log("undefined is not equal to null");
if (a === b) console.log("undefined is strictly equal to null");
else console.log("undefined is stricly not equal to null");
