let firstName: string = "Mac";
let isLoggedIn: boolean = false;
let regex: RegExp = /foo/g;

const names: string[] = ["Mac", "Max"];
const numbers: Array<number> = [1, 2, 3, 4];

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const max: Person = {
  firstName: "Max",
  lastName: "Redford",
  age: 35,
};

type ID = Record<number, string>;

const ids: ID = {
  10: "a",
  20: "b",
  30: "c",
};

ids[40] = "e";

console.log(ids);
