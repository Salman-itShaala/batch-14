const btn = document.getElementById("my-btn");
const inputEl = document.getElementById("my-input");

inputEl.addEventListener("focus", handleFocus);

inputEl.addEventListener("blur", handleBlur);

inputEl.addEventListener("change", handleChange);

function handleFocus() {
  console.log("Input is focused");
}

function handleBlur() {
  console.log("Input is blurred");
}

function handleChange(event) {
  console.log("input is changed", event.target.value);
}

// onclick

btn.ondblclick = handleClick;

btn.onmouseenter = a;

btn.onmouseleave = b;

function a() {
  btn.style.backgroundColor = "blue";
}

function b() {
  btn.style.backgroundColor = "white";
}

function handleClick(e) {
  console.log("Button is clicked", e.target);
}

// document.onkeypress = z;

function z(event) {
  console.log("Key is pressed", event.key);
}

// document.onmousemove = handleMouseMove;

// document.addEventListener("mousemove", handleMouseMove);

document.addEventListener("DOMContentLoaded", a);

function handleMouseMove(event) {
  console.log("X cordinate is ", event.clientX);
  console.log("Y cordinate is ", event.clientY);
}
