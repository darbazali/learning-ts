type a = string;
const x: a = "22";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

const myNum: number = addOrConcat(2, 2, "add") as number;
const myStr: string = addOrConcat(2, 2, "concat") as string;

const img = document.querySelector("img") as HTMLImageElement;

const myImage = new Image();
myImage.alt = "Image created with constructor";

console.log(myImage.complete);
