"use strict";
// functions in ts
const { log, clear } = console;
clear(); // clear console before each run
const greet = (name) => `Hi ${name}`;
log(greet("Max"));
// interface MathFunction {
//     (a: number, b: number): number
// }
const add = (a, b) => a + b;
log(add(9, 9));
const subtract = (a, b) => a - b;
log(subtract(6, 2));
const multiply = (a, b) => a * b;
log(multiply(5, 5));
// Optional Paramerters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
log(addAll(1, 2, 3));
// Default Param
const sumAll = (a, b, c = 2) => a + b + c;
// Rest Params
const total = (a, ...nums) => a + nums.reduce((prev, curr) => prev + curr);
log(total(10, 2, 3));
