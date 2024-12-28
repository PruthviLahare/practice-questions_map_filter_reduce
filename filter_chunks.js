import {
  isEven,
  average,
  sortList,
} from "/Users/pruthvilahare/workspace/generic_use/maths_library.js";

console.log = function () {};

// -----------------------------------------------------------------------------

const filterBySalary = function (employees, salary) {
  return employees.filter((employee) => employee.salary > salary);
};

const employeesSalary = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 7000 },
];

console.log(filterBySalary(employeesSalary, 5000));

// -----------------------------------------------------------------------------

const filterByMathGrade = function (students, grade) {
  return students.filter(({ grades }) => grades.math > grade);
};

const studentsResult = [
  { name: "John", grades: { math: 80, science: 90 } },
  { name: "Jane", grades: { math: 70, science: 85 } },
];

console.log(filterByMathGrade(studentsResult, 70));

// -----------------------------------------------------------------------------

const filterByPrice = function (products, price) {
  return products.filter((product) => product.price < price);
};

const products = [
  { name: "item1", price: 20 },
  { name: "item2", price: 50 },
  { name: "item3", price: 10 },
];
console.log(filterByPrice(products, 27));

console.log = function () {};
// -----------------------------------------------------------------------------

const filterByAge = function (people, greaterThan) {
  return people.filter(({ age }) => age > greaterThan);
};

const citizens = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

console.log(filterByAge(citizens, 27));

console.log = function () {};
// -----------------------------------------------------------------------------

const filterActiveUsersByPostCount = function (users) {
  const postCount = users.map((user) => user.postCount);

  const avg = average(postCount);
  return users.filter(({ postCount }) => postCount > avg);
};

const postUsers = [
  { username: "Alice", postCount: 5 },
  { username: "Bob", postCount: 8 },
  { username: "Charlie", postCount: 3 },
];
console.log(filterActiveUsersByPostCount(postUsers));

// -----------------------------------------------------------------------------

const filterPopularPosts = function (posts) {
  const likes = posts.map((post) => post.likes);
  const avg = average(likes);

  return posts.filter(({ likes }) => likes > avg);
};

const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 },
  { postId: 3, likes: 150 },
];

console.log(filterPopularPosts(posts));

// -----------------------------------------------------------------------------

const getMedian = function (sorted) {
  const noOfElements = sorted.length;
  const middle = Math.floor(noOfElements / 2);

  return isEven(noOfElements)
    ? sorted[middle] + sorted[middle - 1]
    : sorted[middle];
};

const filterCitiesAboveMedianPopulation = function (cities) {
  const population = cities.map((city) => city.population);
  const sorted = sortList(population);

  const medians = getMedian(sorted);

  return cities.filter(({ population }) => population > medians);
};

const cities = [
  { name: "City A", population: 2000 },
  { name: "City B", population: 5000 },
  { name: "City C", population: 3000 },
  // { name: "City C", population: 1000 },
];

console.log(filterCitiesAboveMedianPopulation(cities));

// -----------------------------------------------------------------------------

const filterHighSalaryEmployees = function (employees) {
  const salaries = employees.map((employee) => employee.salary);
  const avg = average(salaries);

  return employees.filter((employee) => employee.salary > avg);
};

const employees = [
  { name: "Alice", salary: 5000, department: "HR" },
  { name: "Bob", salary: 7000, department: "HR" },
  { name: "Charlie", salary: 4000, department: "IT" },
];

console.log(filterHighSalaryEmployees(employees));

// -----------------------------------------------------------------------------

const filterTopRatedBooks = function (books) {
  const ratings = books.map((book) => book.rating);
  const avg = average(ratings);

  return books.filter(({ rating }) => rating > avg);
};

const booksRating = [
  { title: "Book 1", rating: 4 },
  { title: "Book 2", rating: 5 },
  { title: "Book 3", rating: 3 },
];

console.log(filterTopRatedBooks(booksRating));

// -----------------------------------------------------------------------------

const filterHighValueOrders = function (orders) {
  const totalAmount = orders.map((order) => order.amount);
  const avg = average(totalAmount);

  return orders.filter(({ amount }) => amount > avg);
};

const orders = [
  { orderId: 1, amount: 20 },
  { orderId: 2, amount: 50 },
  { orderId: 3, amount: 10 },
];

console.log(filterHighValueOrders(orders));

// -----------------------------------------------------------------------------

const filterBirthdaysThisMonth = function (people) {
  return people.filter((person) => person.birthDate.slice(5, 7) === "12");
};

const birthDates = [
  { name: "Alice", birthDate: "2024-12-01" },
  { name: "Bob", birthDate: "2024-11-01" },
];

console.log(filterBirthdaysThisMonth(birthDates));

// -----------------------------------------------------------------------------

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter((student) =>
    student.subjects.every((subject) => subject.passed)
  );
};

const studentsGrade = [
  {
    name: "John",
    subjects: [
      { name: "Math", passed: true },
      { name: "Science", passed: true },
    ],
  },
  {
    name: "Jane",
    subjects: [
      { name: "Math", passed: false },
      { name: "Science", passed: true },
    ],
  },
];

console.log(filterStudentsWithAllSubjectsPassed(studentsGrade));

// -----------------------------------------------------------------------------

const filterBelowAveragePrice = function (products) {
  const totalAmount = products.map((product) => product.price);
  const avg = average(totalAmount);

  return products.filter(({ price }) => price < avg);
};

const items = [
  { name: "item1", price: 10 },
  { name: "item2", price: 20 },
  { name: "item3", price: 5 },
];

console.log(filterBelowAveragePrice(items));
// -----------------------------------------------------------------------------

const filterInStockProducts = function (products) {
  return products.filter((product) => product.inStock);
};

// const products = [
//   { product: "apple", inStock: true },
//   { product: "banana", inStock: false },
// ];

console.log(filterInStockProducts(products));

// -----------------------------------------------------------------------------

const filterHighGrades = function (students) {
  return students.filter((student) => student.grade > 80);
};

const students = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 85 },
];

console.log(filterHighGrades(students));

// -----------------------------------------------------------------------------

// const invert = function (f) {
//   return function (...args) {
//     return !f(...args);
//   };
// };

const filterIncompleteProfiles = function (users) {
  return users.filter((user) => !user.profileComplete);
};

const usersData = [
  { username: "alice", profileComplete: true },
  { username: "bob", profileComplete: false },
];

console.log(filterIncompleteProfiles(usersData));

// -----------------------------------------------------------------------------

// const isGreaterThan = function (num1) {
//   return function (num2) {
//     return num1 < num2;
//   };
// };

const filterLongBooks = function (books) {
  return books.filter((books) => books.pages > 200);
};

const books = [
  { title: "Book 1", pages: 150 },
  { title: "Book 2", pages: 250 },
];
console.log(filterLongBooks(books));

// -----------------------------------------------------------------------------

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter((num) => num > 10);
};

const numbers = [5, 12, 7, 18, 3];
console.log(filterNumbersGreaterThanTen(numbers));

// -----------------------------------------------------------------------------

const filterActiveUsers = function (users) {
  return users.filter((user) => user.active);
};

const users = [
  { username: "alice", active: true },
  { username: "bob", active: false },
];

console.log(filterActiveUsers(users));

// -----------------------------------------------------------------------------

const filterAdults = function (people) {
  return people.filter((person) => person.age > 30);
};

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
console.log(filterAdults(people));

// -----------------------------------------------------------------------------

const filterLongWords = function (words) {
  return words.filter((word) => word.length > 5);
};

const words = ["apple", "banana", "kiwi", "grape"];
console.log(filterLongWords(words));

// -----------------------------------------------------------------------------

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};
// const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
