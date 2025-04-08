const parentDiv = document.getElementById("parent");
const inputEl = document.getElementById("my-input");

function addPara() {
  // creating a paragraph
  const para = document.createElement("p");

  const textToWrite = inputEl.value;

  para.innerHTML = textToWrite;

  // adding para to html (parentDiv)
  parentDiv.append(para);
}
