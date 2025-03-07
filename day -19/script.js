function askQuestion() {
  //   alert("Something");

  const userResponse = confirm("Are you student??"); // true or false

  if (userResponse) {
    alert("You are allowed to attend session");
  } else {
    alert("You are not allowd to attend session");
  }
}

// question --> answer
// prompt("question");

function askKaiseHo() {
  const response = prompt("Kaise ho??"); // string or null (when user clicks on cancel btn)
  alert(response);
}
