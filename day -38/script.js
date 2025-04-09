const cities = ["pune", "kolhapur", "nashik", "satara"];

// pune
// kolhapur
// nashik
// satara

console.log(cities);

console.log(cities[1]);
console.log(cities.at(-2));

// error
// undefined
// null

console.log("Array before splice", cities);

cities.splice(1, 0, "mumbai"); // splice(startingIndex, countToDelete, elemntToAdd)

console.log("Array after splice", cities);
