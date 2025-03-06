function addNumbers(num1, num2) {
  let sum = num1 + num2;

  return sum;
}

// login --> email, password
function authenticateUser(email, password) {
  // correct email and password
  if (email === "salman@gmail.com" && password === "salman@12345") {
    return "Login successfull";
  } else {
    return "Login unsuccesfull";
  }
}

const status = authenticateUser("salman.shaikh@itshaala.com", "123456789");

if (status === "Login successfull") {
  console.log("Go to dashboard");
} else {
  console.log("Invalid email or password");
}
