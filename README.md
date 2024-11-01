# README.md

## Problem 1: Array Filtering and Mapping

**Task:** Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining persons to an array of names. Print the final result.

### Solution:

```javascript
const getMaleNames = (persons) => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};
```

## Problem 2: Object Manipulation

**Task:** Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

### Solution:

const getBookTitles = (books) => {
return books.map((book) => book.title);
};

## Problem 3: Function Composition

**Task:** Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

### Solution:

const processNumber = (number) => {
const squaredNumber = square(number);
const doubledNumber = double(squaredNumber);
const result = addFive(doubledNumber);
return result;
};

## Problem 4: Sorting Objects

**Task:** Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

### Solution:

const getCarsSortedByYear = (cars) => {
return cars.sort((a, b) => a.year - b.year);
};

## Problem 5: Find and Modify

**Task:** Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

### Solution:

const gerPersonByName = (peoples, searchName) => {
const result = peoples.find((people) => people.name === searchName);
if (result) {
result.age += 1;
}
return result;
};
