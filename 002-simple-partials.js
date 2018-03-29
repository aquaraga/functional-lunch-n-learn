// Increment and decrement using addition


let sum = function(x, y) {
    return x + y;
}


let inc = sum.bind(null, 1);
let dec = sum.bind(null, -1);




console.log(inc(3));
console.log(dec(3));





