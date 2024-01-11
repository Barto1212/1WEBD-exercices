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
  updateTodoList();
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
  updateTodoList();
  input.value = "";
}

//
// prends un tableau en paramètre et l'affiche sous forme de liste
updateTodoList();
//
// injecte la liste
function updateTodoList() {
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
