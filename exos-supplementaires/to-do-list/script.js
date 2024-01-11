const form = document.querySelector("form");
form.addEventListener("submit", handleClick);

const toDoListArray = [
  "Faire la vaisselle",
  "Nettoyer",
  "Regarder une série",
  "Faire une sieste",
];

function handleClick(event) {
  event.preventDefault();
  const value = document.querySelector("#input").value;
  console.log(value);
  toDoListArray.push(value);
  injectTodoList(toDoListArray);
}

//
// prends un tableau en paramètre et l'affiche sous forme de liste
injectTodoList(toDoListArray);
//
// injecte la liste
function injectTodoList(listTextArray) {
  const list = document.querySelector("#list");
  const elementsToRemove = list.querySelectorAll("li");
  console.log(elementsToRemove);
  elementsToRemove.forEach((element) => {
    list.removeChild(element);
  });
  listTextArray.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  });
}
