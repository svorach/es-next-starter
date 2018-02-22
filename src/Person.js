export default class Person {
  constructor(firstName = 'Bob', lastName = 'Smith') {
    this.firstName = firstName
    this.lastName = lastName
  }

  greet() {
    console.log(`${this.firstName} says Hello!`)
  }
}