// Activity-1: Understanding Promises

// Task-1: Promise that resolves with a message
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation completed successfully");
    }, 1000);
});

promise1.then((message) => {
    console.log(message);
});

// Task-2: Promise that rejects with an error message
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("An error occurred");
    }, 1000);
});

promise2.catch((error) => {
    console.log(error);
});


// Activity-2: Chaining Promises

// Task-3: Sequence of promises that simulate fetching data from the server in a specific order
function fetchDataFromServer(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", data);
            resolve("Data fetched successfully");
        }, 2000);
    });
}

console.log("Starting fetch for data 1...");
fetchDataFromServer(1).then((result) => {
    console.log(result);
    console.log("Starting fetch for data 2...");
    return fetchDataFromServer(2);
}).then((result) => {
    console.log(result);
    console.log("Starting fetch for data 3...");
    return fetchDataFromServer(3);
}).then((result) => {
    console.log(result);
    console.log("Starting fetch for data 4...");
    return fetchDataFromServer(4);
}).then((result) => {
    console.log(result);
});


// Activity-3: Using Async/Await

// Task-4: Async function that waits for a promise to resolve and logs the value
function asyncApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise resolved");
            resolve('Operation successful');
        }, 2000);
    });
}

async function logResult() {
    await asyncApi();
}
console.log(logResult());

// Task-5: Async function that handles a rejected promise using try-catch and logs the error message
async function handlePromise(promise) {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const failingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise failed'));
    }, 2000);
});

handlePromise(failingPromise);


// Activity-4: Fetching Data from an API

// Task-6: Use fetch API to fetch data from a public API and log response using promises
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

function fetchApiData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchApiData();

// Task-7: Use the fetch API to get data from a public API and log the response data to the console using async/await
const currencyUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

const fetchCurrencyData = async () => {
    try {
        const response = await fetch(currencyUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchCurrencyData();


// Activity-5: Concurrent Promises

// Task-8: 
function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 resolved successfully");
        }, 5000);
    });
}

const promiseA = delayedSuccess();
const promiseB = delayedSuccess();

Promise.all([promise1, promise2]).then((messages) => {
    console.log(messages);
});

// Task-9
Promise.race([promise1, promise2]).then((message) => {
    console.log(message);
});