console.log = function () { };

// -----------------------------------------------------------------------------

const filterHighGrades = function (students) {
  return students.filter(function (student) {
    return student.grade > 80;
  });
};

const students = [{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }];
console.log(filterHighGrades(students));


// -----------------------------------------------------------------------------

const activeUsers = function (user) {
  return user.profileComplete;
};

// const invert = function (f) {
//   return function (...args) {
//     return !f(...args);
//   };
// };

const filterIncompleteProfiles = function (users) {
  // const inactiveUsers = invert(activeUsers);
  return users.filter(function (user) {
    return !user.profileComplete;
  });
};


const usersData = [{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }];
console.log(filterIncompleteProfiles(usersData));


// -----------------------------------------------------------------------------

// const isGreaterThan = function (num1) {
//   return function (num2) {
//     return num1 < num2;
//   };
// };

const filterLongBooks = function (books) {
  return books.filter(function (books) {
    return books.pages > 200;;
  });
};

const books = [{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }];
console.log(filterLongBooks(books));

// -----------------------------------------------------------------------------

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(function (num) {
    return num > 10;
  });
};

const numbers = [5, 12, 7, 18, 3];
console.log(filterNumbersGreaterThanTen(numbers));

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
  return people.filter(function (person) {
    return person.age > 30;
  });
};

const people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }];
console.log(filterAdults(people));

// -----------------------------------------------------------------------------

// const lengthGreaterThan5 = function (word) {
//   return word.length > 5;
// };

const filterLongWords = function (words) {
  return words.filter(function (word) {
    return word.length > 5;
  });
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