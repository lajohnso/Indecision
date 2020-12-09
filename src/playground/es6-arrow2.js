const user = {
  name: "Lars",
  cities: ["Oslo", "Bergen", "Trondheim"],
  printPlacesVisited() {
    return this.cities.map((city) => this.name + " has visited " + city);
  },
};

console.log(user.printPlacesVisited());

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((int) => this.multiplyBy * int);
  },
};

console.log(multiplier.multiply());
