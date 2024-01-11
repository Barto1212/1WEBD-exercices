// Ajout du titre :
const titreDeMaPage = document.createElement("h1");
titreDeMaPage.textContent = "To do list";
titreDeMaPage.classList.add("title");
injectInRoot(titreDeMaPage);
//
//
//
const toDoListArray = [
  "Faire la vaisselle",
  "Nettoyer",
  "Regarder une série",
  "Faire une sieste",
];
generateList(toDoListArray);

//
// prends un tableau en paramètre et l'affiche sous forme de liste
function generateList(listTextArray) {
  // création de ul :
  const listContainer = document.createElement("ul");

  // ajout des li dans mes ul :
  listTextArray.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    listContainer.appendChild(item);
  });

  // injection du ul contenant les li :
  injectInRoot(listContainer);
}
//
//
//
//
//
//
//

//
// prends en argument un élément DOM et l'injecte dans root
function injectInRoot(element) {
  // On séléctionne root :
  const root = document.querySelector("#root");
  // test si root existe
  if (root) {
    // On injecte :
    root.appendChild(element);
  } else {
    // Sinon erreur
    throw new Error("Root n'est pas définit");
  }
}
