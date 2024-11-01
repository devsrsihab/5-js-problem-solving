# README.md

## Problem 1: Array Filtering and Mapping

**Task:** Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining persons to an array of names. Print the final result.

### Problem Data:

```javascript
const persons = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Evan", age: 40, gender: "male" },
];
```

### Solution:

```javascript
const getMaleNames = (persons) => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};
```

## Result

```javascript
["Bob", "Charlie", "Evan"];
```

When you call the function `getMaleNames` with an array of person objects, it will return an array of names of males. For example:

## Problem 2: Object Manipulation

**Task:** Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

### Problem Data:

```javascript
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
];
```

### Solution:

```javascript
const getBookTitles = (books) => {
  return books.map((book) => book.title);
};
```

## Result

```javascript
[
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Moby Dick",
  "War and Peace",
];
```

## Problem 3: Function Composition

**Task:** Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

### Solution:

```javascript
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
```

## Result

```javascript
37;
```

## Problem 4: Sorting Objects

**Task:** Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

### Solution:

```javascript
const getCarsSortedByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortedCars = getCarsSortedByYear(cars);
```

## Result

```javascript
[
  { make: "Chevrolet", model: "Impala", year: 2005 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Tesla", model: "Model S", year: 2020 },
];
```

## Problem 5: Find and Modify

**Task:** Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

### Problem Data:

```javascript
const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 },
];
```

### Solution:

```javascript
const gerPersonByName = (peoples, searchName) => {
  const result = peoples.find((people) => people.name === searchName);
  if (result) {
    result.age += 1;
  }
  return result;
};

const updatedPeoples = gerPersonByName(peoples, "Alice");
```

## Result

```javascript
{ name: "Alice", age: 26 };
```
