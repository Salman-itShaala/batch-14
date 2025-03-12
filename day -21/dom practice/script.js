const heading = document.getElementById("my-h1");

function showH1() {
  heading.style.display = "block";
}

function hideH1() {
  heading.style.display = "none";
}

// elemtn-->  content  --> change

// .innerHTML
// .innerText
// .textContent

function changeContent() {
  heading.style.color = "red";
  heading.style.backgroundColor = "black";
}
