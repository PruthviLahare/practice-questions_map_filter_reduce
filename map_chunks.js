// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]

const reverse = function (array) {
  return array.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverse);
};

const arrayToRev = [[1, 2, 3], [4, 5, 6]];

console.log(reversedArraysOf(arrayToRev));

// -----------------------------------------------------------------------------

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]

const createStringSplitter = function (splitWith) {
  return function (string) {
    return string.split(splitWith);
  };
};

const vowelCounter = function (array) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const vowelAccumulator = function (count, char) {
    return vowels.includes(char) ? count + 1 : count;
  };

  return array.reduce(vowelAccumulator, 0);
};

const countVowelsOf = function ([...strings]) {
  console.log(strings);

  const s = strings.map(createStringSplitter(''));
  return s.map(vowelCounter);
};

const inputStrings = ["apple", "banana", "grape"];
console.log(countVowelsOf(inputStrings));

// console.log = function () { };

// -----------------------------------------------------------------------------

const duplicateStr = function (letter) {
  return letter + letter;
};

const repeatedStringsOf = function (strings) {
  return strings.map(duplicateStr);
};

const stringsToRepeat = ["hi", "bye"];
console.log(repeatedStringsOf(stringsToRepeat));

// -----------------------------------------------------------------------------

const concat = function (array) {
  return array.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(concat);
};

const arrayToJoin = [["a", "b"], ["c", "d"]];
console.log(joinedArraysOf(arrayToJoin));

// -----------------------------------------------------------------------------

const splitWordsOf = function (strings) {
  return strings.map(createStringSplitter(' '));
};

const wordsToSplit = ["hello world", "goodbye moon"];
console.log(splitWordsOf(wordsToSplit));

// -----------------------------------------------------------------------------

const domainNameMapper = function (email) {
  const sliceFrom = email.indexOf('@') + 1;

  return email.slice(sliceFrom, email.length);
};

const domainNamesOf = function (emails) {
  return emails.map(domainNameMapper);
};

const emails = ["user1@gmail.com", "admin@yahoo.com"];
console.log(domainNamesOf(emails));

// -----------------------------------------------------------------------------

const characterCodeOf = function (char) {
  return char.charCodeAt();
};

const charCodesOf = function (strings) {
  return strings.map(characterCodeOf);
};

const characters = ["a", "b", "c"];
console.log(charCodesOf(characters));

// -----------------------------------------------------------------------------

const booleanNegativeOf = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(booleanNegativeOf);
};

const booleans = [true, false, true];
console.log(negatedBooleansOf(booleans));

// -----------------------------------------------------------------------------

const convertToArray = function (string) {
  return [...string].map(duplicateStr).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(convertToArray);
};

const wordsToDouble = ["cat", "dog", "bat"];
console.log(doubleLettersOf(wordsToDouble));

// -----------------------------------------------------------------------------

const reverseWordsMapper = function (word) {
  console.log();

  return [...word].reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseWordsMapper);
};

const wordsToReverse = ["hello", "world"];
console.log(reversedStringsOf(wordsToReverse));

// -----------------------------------------------------------------------------

const truthyNumbersMapper = function (number) {
  return number !== 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(truthyNumbersMapper);
};

const truthyNumbers = [0, 1, 2, 3, -1];
console.log(truthValuesOf(truthyNumbers));

// -----------------------------------------------------------------------------

const firstCharactersMapper = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstCharactersMapper);
};

const words = ["apple", "banana", "kiwi"];
console.log(firstCharactersOf(words));


// -----------------------------------------------------------------------------

const uppercaseMapper = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(uppercaseMapper);
};

const wordToconvert = ["hello", "world"];
console.log(uppercaseOf(wordToconvert));

// -----------------------------------------------------------------------------

const lengthMapper = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthMapper);
};

// const words = ["apple", "banana", "kiwi"];
console.log(lengthsOf(words));

// -----------------------------------------------------------------------------

const squareMapper = function (number) {
  return Math.pow(number, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(squareMapper);
};

const numbers = [1, 2, 3];
console.log(squaresOf(numbers));