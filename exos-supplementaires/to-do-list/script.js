const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", handleSubmit);
list.addEventListener("click", deleteToDo);

const toDoListArray = [
  "Faire la vaisselle",
  "Nettoyer",
  "Regarder une série",
  "Faire une sieste",
];

function deleteToDo(event) {
  const indexToDelete = event.target.id;
  if (indexToDelete === "") {
    return;
  }
  toDoListArray.splice(Number(indexToDelete), 1);
  render();
}

function handleSubmit(event) {
  event.preventDefault();
  const value = document.querySelector("#input").value;
  if (value === "") {
    return;
  }
  if (toDoListArray.includes(value)) {
    input.value = "";
    return;
  }
  toDoListArray.push(value);
  render();
  input.value = "";
}

//
// prends un tableau en paramètre et l'affiche sous forme de liste
render();
//
// injecte la liste
function render() {
  const elementsToRemove = list.querySelectorAll("li");
  elementsToRemove.forEach((element) => {
    list.removeChild(element);
  });
  toDoListArray.forEach((itemText, index) => {
    const item = document.createElement("li");
    const itemLeft = document.createElement("div");
    const itemRight = document.createElement("div");
    itemRight.classList.add("cross");
    itemLeft.textContent = itemText;
    itemRight.textContent = "X";
    itemRight.setAttribute("id", index);
    item.appendChild(itemLeft);
    item.appendChild(itemRight);
    list.appendChild(item);
  });
}
