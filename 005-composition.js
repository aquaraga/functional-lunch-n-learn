//                 1
//              -------
//              1 + x^2

// Can we write our own version of 'compose'?

let compose = (...fns) => 
  (...args) =>
  fns.reverse().reduce((acc, f) => f(acc), args);

let reciprocal = x => (1/x)
let square = x => x * x
let inc = x => x + 1



console.log(compose(reciprocal, inc, square)(3))