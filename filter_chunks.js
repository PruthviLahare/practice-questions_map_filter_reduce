// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]

const lengthGreaterThan5 = function (word) {
  return word.length > 5;
};

const filterLongWords = function (words) {
  return words.filter(lengthGreaterThan5);
};

const words = ["apple", "banana", "kiwi", "grape"];
console.log(filterLongWords(words));


console.log = function () { };
// -----------------------------------------------------------------------------

// even numbers [1, 2, 3, 4, 5] => [2, 4]

const isEven = function (num) {
  return (num & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
