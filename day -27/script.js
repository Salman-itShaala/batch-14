const boxes = document.querySelectorAll(".child"); // 169
const colorInput = document.querySelector("#color-input");

let color = "black";
let isMousePressed = false;
colorInput.onchange = changeColor;

function changeColor() {
  color = colorInput.value;
}

document.onmousedown = turnOnDrawing;
document.onmouseup = turnOffDrawing;

function turnOnDrawing() {
  isMousePressed = true;
}

function turnOffDrawing() {
  isMousePressed = false;
}

for (let i = 0; i <= 169; i++) {
  boxes[i].addEventListener("mouseenter", colorBox);
}

function colorBox(event) {
  if (isMousePressed) {
    event.target.style.backgroundColor = color;
  }
}

function avtivateEraser() {
  color = "white";
}
