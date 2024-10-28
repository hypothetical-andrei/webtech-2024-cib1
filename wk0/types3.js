const a = [0, 1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

for (let element of a) {
  console.log(element)
}

const p1 = {
  firstName: 'John',
  lastName: 'Doe',
  introduce: function () {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName)
  }
}

for (let key in p1) {
  console.log(p1[key])
}

console.log(p1.introduce())