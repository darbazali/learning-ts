function addNumbers(a: number, b: number): number {
    return a + b
}

console.log(addNumbers(1, 2)) // returns 3

const addStrings = (str1: string, str2: string = ""): string =>
    `${str1} ${str2}`

console.log(addStrings("a", "b")) // returns a b

const format = (title: string, param: string | number): string =>
    `${title} ${param}`

console.log(format("Hunter", 2))

const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

printFormat("Killer", "Whale")

const fetchData = (url: string) => Promise.resolve(`Data from ${url}`)

fetchData("api/v1/items").then((res) => console.log(res))
