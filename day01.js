// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 2;
console.log(num); // Output: 2

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let sentence = "Learing javaScript...";
console.log(sentence); // Output: Learing javaScript...


// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const isTrue = true;
console.log(isTrue); // Output: true


// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.
let n = 22; // number
let str = "30 Days of JS"; // string
let bool = false; // Boolean
let lang = { Language: "JavaScript", Days: 30 }; // object
let arr = [1, 2, 3]; // Array

console.log(typeof n); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof lang); // Output: object
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)


// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let myLanguage = "Java";
console.log(myLanguage); // Output: Java
myLanguage = "JavaScript";
console.log(myLanguage); // Output: JavaScript


// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const const1 = 22;
console.log(const1); // Output: 22
// const1 = 23; // Error: Assignment to constant variable.


// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let number = 20 ;
let string = "This is task 1";
let boolean = true;
let object = { code: "JS" };
let a = [1, 2, 3, 4, 5];
let undefined;
let nullVar = null;

console.log("Value: ", number, ", Type: ", typeof number);
// Output: Value:  20 , Type:  number

console.log("Value: ", string, ", Type: ", typeof string);
// Output: Value:  This is task 1 , Type:  string

console.log("Value: ", boolean, ", Type: ", typeof boolean);
// Output: Value:  true , Type:  boolean

console.log("Value: ", object, ", Type: ", typeof object);
// Output: Value:  { code: 'JS' } , Type:  object

console.log("Value: ", a, ", Type: ", typeof a);
// Output: Value:  [ 1, 2, 3, 4, 5 ] , Type:  object

console.log("Value: ", undefined, ", Type: ", typeof undefined);
// Output: Value:  undefined , Type:  undefined

console.log("Value: ", nullVar, ", Type: ", typeof nullVar);
// Output: Value:  null , Type:  object 


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let toChange = "I will be changed in next line.";
console.log(toChange); // Output: I will be changed in next line.
toChange = "I've been changed.";
console.log(toChange); // Output: I've been changed.

const cantChange = "Dont try to change me. You will get an error.";
console.log(cantChange); // Output: Dont try to change me. You will get an error.
// cantChange = "I will try."; // Error: Assignment to constant variable.