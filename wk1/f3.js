const arr = [0, 1, 2, 3, 4, 5, 6]

const squareList = arr.map(e => e * e)

console.log(squareList)

const filteredList = arr.filter(e => e > 3)

console.log(filteredList)

console.log(arr.find(e => e > 5))
console.log(arr.findIndex(e => e > 5))

const sum = arr.reduce((acc, e) => acc + e, 0)