import { filterEvenNumbers } from "./filter_chunks.js";
import { squaresOf } from "./map_chunks.js";
import { isOdd } from "/Users/pruthvilahare/workspace/generic_use/maths_library.js";

const sumOf = function (numbers) {
  return numbers.reduce((init, number) => init + number, 0);
};

const productOf = function (numbers) {
  return numbers.reduce((init, number) => init * number, 1);
};

const averageOf = function (numbers) {
  return numbers.reduce((init, number) => init + number, 0) / numbers.length;
};

const minOf = function (numbers) {
  return numbers.reduce((a, b) => {
    if (a > b) {
      return b;
    }
    return a;
  }, +Infinity);
};

const maxOf = function (numbers) {
  return numbers.reduce((a, b) => {
    if (a > b) {
      return a;
    }

    return b;
  }, -Infinity);
};

const sumPositiveNumbers = function (numbers) {
  const positiveNumbers = numbers.filter((num) => num > 0);
  return sumOf(positiveNumbers);
};

const sumOfSquares = function (numbers) {
  return sumOf(squaresOf(numbers));
};

const sumOfOddNumbers = function (numbers) {
  const oddList = numbers.filter((num) => isOdd(num));

  return sumOf(oddList);
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce((init, num) => {
    return num < 0 ? init + 1 : init;
  }, 0);
};

const findSumOfEvenSquares = function (numbers) {
  const evenList = filterEvenNumbers(numbers);

  return sumOf(squaresOf(evenList));
};

const concatenateWords = function (words) {
  return words.reduce((str, word) => str + word, "");
};

const longestWord = function (words) {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};

const shortestWord = function (words) {
  return words.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  });
};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((str, current) => str + "," + current);
};

const numbers = [1, 2, 3, 4];
const words = ["apple", "banana", "cherry", "kiwi"];
console.log(joinWithComma(words));
