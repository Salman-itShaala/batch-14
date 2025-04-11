console.log("a");

setTimeout(printB, 5000);

setTimeout(printC, 2000);

function printB() {
  console.log("b");
}

function printC() {
  console.log("c");
}
// a
// ..... b
// c
