const square = function (x) {
  return x * x;
};
console.log(square(6));

const squares = (x) => {
  return x * x;
};
console.log(squares(8));

//if the function only has 1 line, you can write it inline
const squareArrow = (x) => x * x;
console.log(squareArrow(9));

const fullName = "Peter Dinklage";
let firstName;

const getFirstName = (fullName) => (firstName = fullName.split(" ")[0]);

const getFirstName2 = (fullName) => {
  return (firstName = fullName.split(" ")[0]);
};

console.log(getFirstName(fullName));
console.log(getFirstName2(fullName));

console.log(firstName);
