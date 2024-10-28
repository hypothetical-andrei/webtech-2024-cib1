const a = [1, 2, 3, 4, 5]

console.log(a.shift())

console.log(a.pop())

a.unshift(-1)

a.push(-5)

console.log(a)

console.log(a.indexOf(3))
console.log(a.indexOf(11))

console.log(a.slice(1, 3))

console.log(a.slice(0, a.length))

a.splice(1, 3, 'a', 'b')

console.log(a)