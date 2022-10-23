/*
 * Learning TypeScript
 * Section #1 - Everyday Types
 * Author: Darbaz Ali
 */

// String type
let userName: string = "Mac"
userName += " Redford"

// Boolean type
const hasLoggedIn: boolean = false

// Number type
const age: number = 31

// RegExp type
const regEx: RegExp = /foo/

// Complex types
// 1. Array type
let names: string[] = userName.split(" ")

// or with Generic type style
let names2: Array<string> = userName.split(" ")

// 2. Object Type
interface Person {
    first: string
    last: string
    age?: number // optional
}

const Max: Person = {
    first: "Max",
    last: "Williams",
}

// 3. Record type
const ids: Record<number, string> = {
    10: "a",
    20: "b",
    30: "c",
}

ids[40] = "d"

// Practical
const square = (array: number[]): number[] =>
    array.map((num: number) => num * num)

console.log(square([1, 2, 3]))
