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

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {};

const numbers = [1, 2, 3, 4, 5, 1];
console.log(sumOfOddNumbers(numbers));
