//

const PrintAllChars = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

PrintAllChars("Salman");

// function convertCountryToUppercase(countryName) {
//   return countryName.toUpperCase();
// }

const contryToUpper = (countryName) => countryName.toUpperCase();

console.log(contryToUpper("india"));
console.log(contryToUpper("russia"));
console.log(contryToUpper("china"));
