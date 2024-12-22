const isGreaterThan = function (num1) {
  return function (num2) {
    return num1 < num2;
  };
};

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) { };

const books = [{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }];

// -----------------------------------------------------------------------------

const filterNumbersGreaterThanTen = function (numbers) {
  const isGreaterThan10 = isGreaterThan(10);
  return numbers.filter(isGreaterThan10);
};

const numbers = [5, 12, 7, 18, 3];
console.log(filterNumbersGreaterThanTen(numbers));

console.log = function () { };
// -----------------------------------------------------------------------------

// active users [{username: "alice", active: true}, {username: "bob", active: 
//false}] => [{username: "alice", active: true}]

const filterActiveUsers = function (users) {
  return users.filter((user) => user.active);
};

const users = [{ username: "alice", active: true }, { username: "bob", active: false }];

console.log(filterActiveUsers(users));

// -----------------------------------------------------------------------------

const filterAdults = function (people) {
  const isGreaterThan30 = isGreaterThan(30);

  return people.filter(function (person) {
    return isGreaterThan30(person.age);
  });
};

const people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }];
console.log(filterAdults(people));

// -----------------------------------------------------------------------------

const lengthGreaterThan5 = function (word) {
  return word.length > 5;
};

const filterLongWords = function (words) {
  return words.filter(lengthGreaterThan5);
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
