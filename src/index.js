import Person from './Person'

const shane = new Person('Shane', 'Vorachek')
const arr = [1, 2, 3, 4, 5]

console.log(shane)
console.log(arr.reduce((a, b) => a + b))