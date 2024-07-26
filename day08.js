// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let Name = "John";
let age = 27;
let str = `Hey! I'm ${Name} and I am ${age} years old.`;
console.log(str);   //Output : Hey! I'm John and I am 27 years old.


// Task 2: Creste a multi-line string using template literals and log it to the console.
str = `This is
a multi-line
string.`
console.log(str);   
//Output :
// This is
// a multi-line
// string.


// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let array = [1, 2, 3, 4, 5];
let [n1, n2] = array;
console.log(n1, " ", n2);   //Output : 1   2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = { 'title': 'Coding', 'author': 'xyz' };
let { title, author } = book;
console.log(title, " ", author);    //Output : Coding   xyz


// Activity 3: Spread and Rest Operators

// Task 3: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1 = [1, 2, 3];
const newArr = [...arr1, 4, 5, 6];
console.log(newArr);  //Output : [ 1, 2, 3, 4, 5, 6 ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function getSum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
const result = getSum(1, 2, 3);
console.log(result);    //Output : 6


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function foo(a, b = 1) {
    return a * b;
}

let r1 = foo(2);
let r2 = foo(8, 7);
console.log(r1, r2);  //Output : 2 56


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
Name = "John";
age = 27;

let person = {
    Name,
    age,
    greet() {
        console.log(`Hey! I'm ${Name} and I am ${age} years old.`);
    },
};
console.log(person);    //Output : { Name: 'John', age: 27, greet: [Function: greet] }
person.greet();         //Output : Hey! I'm John and I am 27 years old.

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let p1 = "name";
let p2 = "age";

person = {
    [p1]: "Tom",
    [p2]: 17,
};
console.log(person);    //Output : { name: 'Tom', age: 17 }