import Person from './Person'

const shane = new Person('Shane', 'Vorachek')
const jenn = new Person('Jenn', 'Dela Cruz')

console.log(shane, jenn)

console.log({banana: 4, ...{mango: 1, apple: 2, orange: 3}})

shane.greet()