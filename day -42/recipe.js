const qString = window.location.search;

const urlParams = new URLSearchParams(qString);

const id = urlParams.get("id");

console.log(id);

getRecipeData();

async function getRecipeData() {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  console.log(data);

  //   add data coming from backend to front end

  document.writeln(data.name);
}

// console.log(qString.split("=")[1]);
