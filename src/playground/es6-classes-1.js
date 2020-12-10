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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let desc = super.getDescription();
    if (this.hasMajor()) {
      desc = desc + `Their major is: ${this.major}`;
    }
    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greet = super.getGreeting();
    if (this.hasHomeLocation()) {
      greet = greet + `, and I'm visting from ${this.homeLocation}`;
    }
    return greet;
  }
}

const me = new Traveler("Lars Johnson", 24, "Oslo");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
