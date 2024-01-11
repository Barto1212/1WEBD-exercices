const input = document.querySelector("#input");
input.addEventListener("keyup", handleClick);

function handleClick(event) {
  console.log(event.target.value);
}

const toDoListArray = [
  "Faire la vaisselle",
  "Nettoyer",
  "Regarder une série",
  "Faire une sieste",
];

//
// prends un tableau en paramètre et l'affiche sous forme de liste
injectTodoList(toDoListArray);
//
//
//
//
//
//
// injecte la liste
function injectTodoList(listTextArray) {
  const list = document.querySelector("#list");
  listTextArray.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  });
}
