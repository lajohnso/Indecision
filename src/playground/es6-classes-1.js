class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, this is ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

const me = new Person("Lars Johnson", 24);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
