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

const joinWithComma = function (words) {
  return words.reduce((str, current) => str + "," + current);
};

const reverseWords = function (words) {
  return words.reduce((previous, current) => current + " " + previous);
};

const joinWordsWithSpace = function (words) {
  return words.reduce((previous, current) => previous + " " + current);
};

const concatenateNames = function (names) {
  return names.reduce((previous, current) => previous + current, "");
};

const countVowels = function (noOfVowels, letter) {
  return "aeiou".includes(letter) ? noOfVowels + 1 : noOfVowels;
};

const countVowelsInWords = function (words) {
  return sumOf(words.map(([...word]) => word.reduce(countVowels, 0)));
};

const makeCamelCase = function (words) {
  return words.reduce(
    (str, current) =>
      str + current.at(0).toUpperCase() + current.slice(1, current.length)
  );
};

const reverse = function (p, c) {
  return c + p;
};

const reverseString = function (words) {
  return concatenateNames(words.map(([...word]) => word.reduce(reverse, "")));
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {};

const numbers = [1, 2, 3, 4];
const words = ["apple", "banana", "cherry"];

console.log(reverseString(words));
