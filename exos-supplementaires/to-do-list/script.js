const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const toDoListArray = [
  "Faire la vaisselle",
  "Nettoyer",
  "Regarder une série",
  "Faire une sieste",
];

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
  injectTodoList(toDoListArray);
  input.value = "";
}

//
// prends un tableau en paramètre et l'affiche sous forme de liste
injectTodoList(toDoListArray);
//
// injecte la liste
function injectTodoList(listTextArray) {
  const list = document.querySelector("#list");
  const elementsToRemove = list.querySelectorAll("li");
  elementsToRemove.forEach((element) => {
    list.removeChild(element);
  });
  listTextArray.forEach((itemText, index) => {
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
