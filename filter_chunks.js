console.log = function () { };

// -----------------------------------------------------------------------------

const isGreaterThan = function (num1) {
  return function (num2) {
    return num1 < num2;
  };
};

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
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
