// 2665. Counter II
var createCounter = function (init) {
    const org = init;
    const obj = {
        increment() {
            init++;
            return init;
        },
        decrement() {
            init--;
            return init;
        },
        reset() {
            init = org;
            return init;
        }
    };
    return obj;
};


// 2635. Apply Transform Over Each Element in Array
var map = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};