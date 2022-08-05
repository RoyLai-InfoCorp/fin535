if (true) {
    var a = 456;
}
console.log(a);

// This returns 456. Why not an error?
// `var` only works for function block.
// Variables declared with var in function becomes local variables.
// variables declared with var anywhere else becomes global variables.