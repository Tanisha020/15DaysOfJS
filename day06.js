// Activity 1: array creation and access

// Task 1
arr = [1, 2, 3, 4, 5];
console.log(arr);       //Output: [ 1, 2, 3, 4, 5 ]

// Task 2
console.log("fitst element:", arr[0]);
console.log("last element:", arr[arr.length - 1]);
//Output:
// fitst element: 1
// last element: 5


// Activity 2: array methods (basic)

// Task 3
arr.push(6);
console.log("changed array:", arr);
//Output: changed array: [ 1, 2, 3, 4, 5, 6 ]

// Task 4
arr.pop();
console.log("removed last element:", arr);
// Output: removed last element:[1,2,3,4,5]

// Task 5
arr.shift();
console.log("shifted array:", arr);
// Output- shifted array: [ 2, 3, 4, 5 ]

// Task 6
arr.unshift(1);
console.log("unshifted array", arr);
//Output- unshifted array: [ 1, 2, 3, 4, 5 ]


// Activity 3: array methods (intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log th new array
arr1 = [1, 2, 3];

double = (n) => n * 2;
new_arr = arr1.map(double);
console.log(new_arr); //Output : [ 2, 4, 6 ]

// Task 8: Use filter method to create a new array with only even numbers.
function even(n) {
    if (n % 2 == 0)
        return n;
}
res = arr.filter(even);
console.log("Even array:", res);   //Uutput: Even array: [2,4]

// Task 9: Use reduce method to calculate the sum of all numbers in the array.
function add(sum, n) {
    return sum + n;
}
result = arr.reduce(add);
console.log("Sum is:", result); //Output: Sum is: 15


// Activity 4: array iteration

// Task 10
for (i in arr)
    console.log(arr[i]);  // output: 1 2 3 4 5

// Task 11- foreach method
call = (str) => console.log(str);
arr.forEach(call);  // output: 1 2 3 4 5


// Activity 5: multi-dimensional arrays

// Task 12
let matrix = [
    [1, 2, 3],
    [1, 2, 3]
]
console.log(matrix); //Output: [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]

// Task 13
console.log(matrix[0][1]);  //Output: 2