const headingEl = document.getElementById("heading");

console.log(headingEl.classList.contains("my-heading"));

// to access the id you can write .id

console.log(headingEl.id);

function addClass() {
  headingEl.classList.add("b");
}

function removeClass() {
  headingEl.classList.remove("b");
}

function toggleClass() {
  headingEl.classList.toggle("active");
}

function showHide() {
  headingEl.classList.toggle("hide");
}
