

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => 
// [{name: "Bob", age: 35}]

const peopleOlderThan30 = function (people) {
  return people.age > 30;
};

const filterAdults = function (people) {
  return people.filter(peopleOlderThan30);
};

const people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }];
console.log(filterAdults(people));

console.log = function () { };

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
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
