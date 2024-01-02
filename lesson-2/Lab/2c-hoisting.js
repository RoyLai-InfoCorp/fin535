console.log(b);
var b = 567;

// This did not throw an exception even though b is only declared 
// after console.log(). Why? 

// Answer:
// In Javascript design, all global variables are moved to the top 
// of the declaration before any code are executed. This is called 
// hoisting Therefore, no error will be thrown if the variable is 
// declared as global anywhere in the code.