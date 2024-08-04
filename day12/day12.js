//Activity 1: Basic Error Handling with Try-Catch

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function generateError() {
    throw new Error("This is an intentional error!");
}

try {
    generateError();
} catch (err) {
    console.log("Caught an error: " + err.message);
}   //Output : Caught an error: This is an intentional error!

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function performDivision(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero!");
    }
    return numerator / denominator;
}

try {
    console.log(performDivision(10, 2)); // 5
    console.log(performDivision(10, 0)); // Will throw an error
} catch (err) {
    console.log("Caught an error: " + err.message);
}   //Output : Caught an error: Denominator cannot be zero!


//Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("In the try block");
    throw new Error("Error thrown in try block");
} catch (err) {
    console.log("Caught an error: " + err.message);
} finally {
    console.log("In the finally block");
}


//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function triggerCustomError() {
    throw new MyCustomError("This is a custom error!");
}

try {
    triggerCustomError();
} catch (err) {
    console.log("Caught an error: " + err.message);
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class InputValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InputValidationError";
    }
}

function checkInput(value) {
    if (value.trim() === "") {
        throw new InputValidationError("Input cannot be empty!");
    }
    return true;
}

try {
    console.log(checkInput("Valid input")); // true
    console.log(checkInput("")); // Will throw an error
} catch (err) {
    console.log("Caught an error: " + err.message);
}

//Activity 4: Error Handling in Promises
//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
let randomOutcomePromise = new Promise((resolve, reject) => {
    let randomVal = Math.random();
    if (randomVal > 0.5) {
        resolve("Promise resolved!");
    } else {
        reject(new Error("Promise rejected!"));
    }
});

randomOutcomePromise
    .then((msg) => console.log(msg))
    .catch((err) => console.log("Caught an error: " + err.message));

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomOutcome() {
    let randomOutcomePromise = new Promise((resolve, reject) => {
        let randomVal = Math.random();
        if (randomVal > 0.5) {
            resolve("Promise resolved!");
        } else {
            reject(new Error("Promise rejected!"));
        }
    });

    try {
        let outcome = await randomOutcomePromise;
        console.log(outcome);
    } catch (err) {
        console.log("Caught an error: " + err.message);
    }
}

handleRandomOutcome();


//Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.url")
    .then((resp) => resp.json())
    .catch((err) => console.log("Caught an error: " + err.message));

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchInvalidData() {
    try {
        let resp = await fetch("https://invalid.url");
        let data = await resp.json();
        console.log(data);
    } catch (err) {
        console.log("Caught an error: " + err.message);
    }
}

fetchInvalidData(); //Output- Caught an error: <network error message>