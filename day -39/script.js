const cities = ["pune", "kolhapur", "sangli", "satara", "lonavala", "mumbai"];

// forEach function --> syntax --> [].forEach(function)

// to preform some operation on all element

cities.forEach((city, i) => {
  console.log(city, i);
});

// map

// ["pune", "kolhapur", "sangli", "satara", "lonavala", "mumbai"]

// ["PUNE", "KOLHAPUR"...., "MUMBAI"]

const newArray = cities.map((city) => {
  return city.toUpperCase(); // KOLHAPUR
});

console.log(newArray);

const numbers = [1, 4, 2, 6, 10, 14, 25, 66, 11, 23, 45];

// filteredArray = [ 25, 66,23, 45] --> greter than 15

const filteredArray = numbers.filter((num) => {
  if (num > 15) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredArray);
