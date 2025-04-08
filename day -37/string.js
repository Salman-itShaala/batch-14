const userName = "   Salman  ";

// .length

console.log(userName);
console.log(userName.length); // 11

// trim() --> to remover whitespace from start and end of a string

const name = userName.trim();

console.log(name);
console.log(name.length);

console.log("    abcd".trimStart());
console.log("abcd    ".trimEnd());

// character access

console.log(name[5]); //

console.log(name.at(-3)); // you can also pass negative values here -> -1 means last char

const str1 = "abcd";

console.log(str1.toUpperCase());

const str2 = "XYZ";

console.log(str2.toLowerCase());

let sentence = "The quick brown fox"; // The quick brown fox

// will return array

console.log(sentence.split(" "));

// .includes --> returns boolean value

// console.log(sentence.includes("quick"));
// console.log(sentence.includes("slow"));
