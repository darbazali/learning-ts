"use strict";
const x = "22";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
const myNum = addOrConcat(2, 2, "add");
const myStr = addOrConcat(2, 2, "concat");
const img = document.querySelector("img");
const myImage = new Image();
myImage.alt = "Image created with constructor";
console.log(myImage.complete);
