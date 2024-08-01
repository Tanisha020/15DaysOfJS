//2634.Filter elements from an array
var filter = function (arr, fn) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if ((fn(arr[i], i))) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

//2626.Array Reduce Transformation
var reduce = function (nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};