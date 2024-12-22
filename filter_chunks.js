// even numbers [1, 2, 3, 4, 5] => [2, 4]

const isEven = function (num) {
  return (num & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
