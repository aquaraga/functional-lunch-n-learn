// Define squares, cubes and square roots in terms of Math.pow
 
function pow(x, y) {
    return Math.pow(x, y)
}

let flip = (fn) => {
    return (...args) => {
        let reverse = args.reverse();
        return fn(...reverse);
    }
}

let flippow = flip(pow);

let square = flippow.bind(null, 2);
let cube = flippow.bind(null, 3);
let sqrt = flippow.bind(null, 0.5);


console.log(sqrt(9));
