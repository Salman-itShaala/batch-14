// title
// document.title

// body
// document.body

// head
// document.head

// html
// document.documentElement

// selecting element with id
const heading = document.getElementById("my-h1");

// console.log(heading);

// selecting element with class name
// this function will return htmlCollection --> you can access
// elements using index
const heading2 = document.getElementsByClassName("my-h2");

const elements = document.getElementsByTagName("h2");

console.log("Elements selected with tagname", elements);

// console.log(heading2[1]);

const heading3 = document.querySelector("h2");

// console.log(heading3);

// Nodelist --> you can access elements using index
const headings = document.querySelectorAll("h2");

console.log(headings[1]);
