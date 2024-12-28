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

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {};

const numbers = [1, -2, 3, -4, 0, -8];
console.log(countNegativeNumbers(numbers));
