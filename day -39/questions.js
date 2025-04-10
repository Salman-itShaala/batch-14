// square given array and generate new array out of it
// Example: [1, 2, 3, 4] → [1, 4, 9, 16]

const numbers = [1, 2, 3, 4, 100, 2, 45, 6, 7, 8];

const squaredArr = numbers.map((num) => {
  return num * num;
});

console.log(squaredArr);

// [1, 2, 3, 4, 5, 6] → [2, 4, 6]

const nums = [1, 2, 3, 4, 5, 6];

const filteredArr = nums.filter((num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredArr);

// ['apple', 'banana'] → ['APPLE', 'BANANA']

const fruits = ["apple", "banana"];

const upperCaseFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log(upperCaseFruits);

const animals = ["cat", "elephant", "dog", "fish"];

// ['elephant', 'fish'] --> filter out elements with less than 3 characters

const filteredAnimals = animals.filter((animal) => {
  if (animal.length > 3) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredAnimals);

// [10, 15, 20] → [15, 20, 25]

const arr = [10, 15, 20];

const newArray = arr.map((num) => {
  return num + 5;
});

console.log(newArray);
