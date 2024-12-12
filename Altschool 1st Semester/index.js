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

// to cheeck the lenght of a string, use (.lenght)

let lenghtname = addedStrings.length;
console.log(lenghtname)

let aa = 0;
let bb = "This should work";

aa = bb.length;
console.log(aa);

//watch out for the typos in the length not lenght

//learning arrays 

let letterOfString = string2[6]; //selecting a letter in a string
console.log(letterOfString);

//changing strings 
string2 = "Hello Wordl!"; //changes the text i string 2 completely
console.log(string2);

//arrays 

let array1 = ["Johnson", 27, 'Male'];
console.log('My name is ' + array1[0] + ', i am ' + array1[1] + ', ' + array1[2]); //string concatenation

//Nested arrays 

let array2 = [['Johnson Kayode', 27, 'Male'], ['Mofe Johnson', 17, 'Female'], ['Olatunji Johnson', 20, 'Male'], ['Akorede Johnson', 25, 'Male']];
console.log(array2[2][1]); //this gets the age of Olatunji johnson - 20.

let array2Length = array2[0][0].length; //This prints the lenght of the string in the array2 index 0 - which is 14
console.log(array2Length);

let firstLetterOfArray2 = array2[0][0][4]; //this prints the 4th letter in the first string that is in the first array2 - S
console.log(firstLetterOfArray2);

//we can use the (.push) fuction to push items into an array

array2[0] = array2.push(4);
console.log(array2[0]);

//working on a funtion that does calculations

function calculator(a,b,sign){
    if (sign == '-')
    {
        let sum = a - b;
        console.log('\n' + 'Subtraction: ' + sum);
        return sum;
    }

    if (sign == '+'){
        let sum = a + b;
        console.log('\n' + 'Addition: ' + sum);
        return sum;
    }
    if (sign == '/'){
        let sum = a / b;
        console.log('\n' + 'Division: ' + sum);
        return sum;
    }
    if (sign == '*'){
        let sum = a * b;
        console.log('\n' + 'Multiplication: ' + sum);
        return sum;
    }
}

calculator(4,2,'+');
calculator(4,2,'-');
calculator(4,2,'/');