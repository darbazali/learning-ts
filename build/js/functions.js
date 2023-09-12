"use strict";
// functions in ts
const greet = (name) => `Hi ${name}`;
console.log(greet('Max'));
// interface MathFunction {
//     (a: number, b: number): number
// }
const add = (a, b) => a + b;
console.log(add(9, 9));
const subtract = (a, b) => a - b;
console.log(subtract(6, 2));
const multiply = (a, b) => a * b;
console.log(multiply(5, 5));
// Optional Paramerters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(1, 2, 3));
