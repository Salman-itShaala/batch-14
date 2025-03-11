const heading = document.getElementById("my-h1");

function changeContent() {
  const text = prompt("Enter anything!!!");
  heading.innerHTML = text;
}
