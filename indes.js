// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender.
// Write a function to filter out all females and then map the remaining person to an array of names.
// Print the final result.

//cTask 1 Solution: TODO:  conlution:
// 1. make a function with taken params persons
// 2. filter out all female
// 3. map the remaining people to an array where the name is returned
// 4. prin the final result

const persons = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Evan", age: 40, gender: "male" },
];

const getMaleNames = (persons) => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const maleNames = getMaleNames(persons);

// 2.Task: Object Manipulation

// Create an array of objects representing books with properties
// like title, author, and year. Write a function that takes the
//array and returns a new array with only the book titles. Print
//the result.

// Task 2 Solution: TODO:  conlution:
// 1. make a function with taken params books
// 2. reuturn new array with only the book titles
// 3. print the final result

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

const bookTitles = getBookTitles(books);

// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number,
// and one to add 5 to a number. Compose these functions to create
// a new function that squares a number, doubles the result, and
//then adds 5.

// Task 3 Solution: TODO:  conlution:
// 1. make square function
// 2. make double function
// 3. make addFive function
// 4. compose the functions to create a new function that squares a number,
//    doubles the result, and then adds 5.
// 5. print the final result

// make a composed function called processNumber
// make function addFive
// under this function make pass args or squre function
// under this function make pass args or double function
// under this function make pass args or addFive function

const square = (number) => {
  return number * number;
};
const double = (number) => {
  return number * 2;
};
const addFive = (number) => {
  return number + 5;
};

const processNumber = (number) => {
  const squaredNumber = square(number);
  const doubledNumber = double(squaredNumber);
  const result = addFive(doubledNumber);

  return result;
};

const result = processNumber(4);

// 4.Task: Sorting Objects

// Create an array of objects representing cars with properties like
//make, model, and year. Write a function to sort the array of cars by
// the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Impala", year: 2005 },
  { make: "Tesla", model: "Model S", year: 2020 },
];

const getCarsSortedByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortedCars = getCarsSortedByYear(cars);

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific
// person by name. If found, modify their age property. Print the updated
// array.

const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 },
];

const gerPersonByName = (peoples, searchName) => {
  const result = peoples.find((people) => people.name === searchName);
  if (result) {
    result.age += 1;
  }
  return result;
};

const updatedPeoples = gerPersonByName(peoples, "Alice");
