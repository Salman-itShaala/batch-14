const cities1 = ["pune", "kolhapur", "nashik"];

const cities2 = ["ahmedabad", "vadodara", "surat"];

// spread operator --> to merge arrays

const mergedArray = [...cities1, ...cities2];

const newArray = [...cities1, "shivajinagar"];

console.log(mergedArray);
console.log(newArray);

// array destructuring --> react

const arr = ["abcd", "efgh", "ijkl", "xyz"];

const [a, b, c] = arr;

console.log(c);
