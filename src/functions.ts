// functions in ts
const greet = (name: string): string => `Hi ${name}`

console.log(greet('Max'))


type MathFunction = (a: number, b: number) => number

// interface MathFunction {
//     (a: number, b: number): number
// }

const add: MathFunction = (a, b) => a + b 

console.log(add(9,9));


const subtract: MathFunction = (a, b) => a - b 

console.log(subtract(6, 2));


const multiply: MathFunction = (a, b) => a * b 

console.log(multiply(5, 5))


// Optional Paramerters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

console.log(addAll(1, 2, 3));
