// https://github.com/Barto1212/1WEBD-exercices

const toDoListArray = ["Faire la vaisselle", "Nettoyer", "Regarder une série"];

const titreDeMaPage = document.createElement("h1");
titreDeMaPage.textContent = "To do list";
titreDeMaPage.classList.add("title");
injectInRoot(titreDeMaPage);

const listContainer = document.createElement("ul");

const listItem = document.createElement("li");
listContainer.appendChild(listItem);

injectInRoot(listContainer);

function injectInRoot(element) {
  // On séléctionne root :
  const root = document.querySelector("#root");
  // On injecte :
  root.appendChild(element);
}
