// function declaration

// kuchKaro();

function kuchKaro() {
  console.log("Doing something123");
}

// 2. Function expression --> this keyword --> diff

const doSomething = function (userName) {
  //   console.log(userName, "Doing something");
  return "Hello how are you?? " + userName;
};

console.log(doSomething("Salman"));

// 3. Arrow function

const doSomethingElse = () => {
  console.log("Doing something from arrow function");
};

// doSomethingElse();
