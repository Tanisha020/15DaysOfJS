// Ques 1
var compose = function(functions) {
    let curr=0
    return function(x){
        for(let i=functions.length-1;i>=0;i--){
            let fun=functions[i]
            curr=fun(x)
            x=curr
        }
        return x
    }
};

// Ques 2s
var once = function(fn) {
    let flag = false;
    return function(...args){
        if(!flag){
            flag = true;
            return fn(...args);
        }
    }
};
