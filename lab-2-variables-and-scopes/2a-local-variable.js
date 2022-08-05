let func = () => {
    var a = 456;
};
func();
console.log(a);

// This will throw an error ReferenceError: a is not defined. Why?
// Answer: By Javascript definition, 
// variables defined using `var` is a local variable when it is used in a function.