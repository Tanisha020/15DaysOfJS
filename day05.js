// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(n) {
    if (n % 2 == 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}
isEven(1);  //Output : The number is odd
isEven(2);  //Output : The number is even

// Task 2: Write a function to calculate the square of a number and return the result.
function getSquare(n) {
    return n * n;
}
console.log(getSquare(10)); //Output : 100


//Activity 2: Function Expression 

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNum = function (n1, n2) {
    if (n1 >= n2) {
        return n1;
    }
    else {
        return n2;
    }
}
console.log(maxNum(100, 17));   //Output : 100

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatStr = function (s1, s2) {
    return s1 + s2;
}
console.log(concatStr("30Days", "OfJavaScript"));   //Output : 30DaysOfJavaScript


//Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const getSum = (n1, n2) => (n1 + n2);
console.log(getSum(2, 22));   //Output : 24

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const isPresent = (str, ch) => {
    return str.includes(ch);
}
console.log(isPresent("JavaScript", 'i'));  //Output :  true


//Activity 4: Function Parameters and Default Values 

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(n1, n2 = 1) {
    return n1 * n2;
}
console.log(multiply(10, 5));  //Output :   50
console.log(multiply(10));     //Output :   10

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age = 18) => {
    return (`Hello, ${name}! Are you ${age} ?`);
}
console.log(greet("Tim"));      //Output : Hello, Tim! Are you 18 ?
console.log(greet("Tom", 25));  //Output : Hello, Tom! Are you 25 ?


//Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function helloWorld() {
    console.log("Hello, World!...");
};

function hello(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
};
hello(helloWorld, 2);
//Output :
// Hello, World!...
// Hello, World!...

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function double(n = 1) {
    return 2 * n;
};

function square(n = 1) {
    return n * n;
};

function foo(f1, f2, num) {
    let a = f1(num);
    let b = f2(a);
    return b;
};

console.log(foo(double, square, 5));    //Output : 100