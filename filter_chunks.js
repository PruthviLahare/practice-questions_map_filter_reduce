// -----------------------------------------------------------------------------

const filterInStockProducts = function (products) {
  return products.filter((product) => product.inStock);
};

const products = [
  { product: "apple", inStock: true },
  { product: "banana", inStock: false },
];

console.log(filterInStockProducts(products));

// -----------------------------------------------------------------------------

const filterHighGrades = function (students) {
  return students.filter((student) => student.grade > 80);
};

const students = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 85 },
];

console.log(filterHighGrades(students));

// -----------------------------------------------------------------------------

// const invert = function (f) {
//   return function (...args) {
//     return !f(...args);
//   };
// };

const filterIncompleteProfiles = function (users) {
  return users.filter((user) => !user.profileComplete);
};

const usersData = [
  { username: "alice", profileComplete: true },
  { username: "bob", profileComplete: false },
];

console.log(filterIncompleteProfiles(usersData));

// -----------------------------------------------------------------------------

// const isGreaterThan = function (num1) {
//   return function (num2) {
//     return num1 < num2;
//   };
// };

const filterLongBooks = function (books) {
  return books.filter((books) => books.pages > 200);
};

const books = [
  { title: "Book 1", pages: 150 },
  { title: "Book 2", pages: 250 },
];
console.log(filterLongBooks(books));

// -----------------------------------------------------------------------------

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter((num) => num > 10);
};

const numbers = [5, 12, 7, 18, 3];
console.log(filterNumbersGreaterThanTen(numbers));

// -----------------------------------------------------------------------------

const filterActiveUsers = function (users) {
  return users.filter((user) => user.active);
};

const users = [
  { username: "alice", active: true },
  { username: "bob", active: false },
];

console.log(filterActiveUsers(users));

// -----------------------------------------------------------------------------

const filterAdults = function (people) {
  return people.filter((person) => person.age > 30);
};

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
console.log(filterAdults(people));

// -----------------------------------------------------------------------------

const filterLongWords = function (words) {
  return words.filter((word) => word.length > 5);
};

const words = ["apple", "banana", "kiwi", "grape"];
console.log(filterLongWords(words));

// -----------------------------------------------------------------------------

const isEven = function (num) {
  return (num & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};
// const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
