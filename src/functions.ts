// functions in ts
const { log, clear } = console;
clear(); // clear console before each run

const greet = (name: string): string => `Hi ${name}`;

log(greet("Max"));

type MathFunction = (a: number, b: number) => number;

// interface MathFunction {
//     (a: number, b: number): number
// }

const add: MathFunction = (a, b) => a + b;

log(add(9, 9));

const subtract: MathFunction = (a, b) => a - b;

log(subtract(6, 2));

const multiply: MathFunction = (a, b) => a * b;

log(multiply(5, 5));

// Optional Paramerters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

log(addAll(1, 2, 3));

// Default Param
const sumAll = (a: number, b: number, c: number = 2): number => a + b + c;

// Rest Params
const total = (a: number, ...nums: number[]): number =>
  a + nums.reduce((prev, curr) => prev + curr);

log(total(10, 2, 3));
