console.log("Hello world")


console.log('Undefined, Null, boolean, string, symbol, number and object'); //to print something to the console.


// using and declaring variables Var, let and const to set variable. Consts are unchangeable, while the other 2 can be modified#

var numbere= 'johnson';
let secondnumber= 'kayode emmanuel';
const justina = 'usual'  //This line can never change 

//storing variables with assignment variables
//always add a semi colon at the line of every js code to know where a line of code ends

let number = 7;
let numbers;

numbers = 22;

console.log('Numbers=', numbers);
console.log(secondnumber)

//Javascript is case sensitive
//Numeric work
let a, b, sum;

a = 10;
b = 20;

b += 19;
a -= 12;

a *= 2;
b *= 32;

a /= 2;
b /=5;

sum = a + b;

console.log('SUm is:', sum);

//Strings 

let string = "There is nothing\ serious to see here";
let string2 = `This is what it means "to you a backtick"`;

console.log(string2);

//Escape sequence 
// \\  backslash
// \n  newline
// \t  tab 
// \b  backspace
// \f  form feed

// String concatenation

let addedStrings = string + '\t' + '\n' + string2;
console.log(addedStrings);
