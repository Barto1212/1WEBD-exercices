function createElement() {
  const newParagraph = document.createElement("p");
  newParagraph.setAttribute("id", "ex_04_p");
  newParagraph.innerText = "Hello World!";
  document.body.appendChild(newParagraph);
}

/**
 * écrire une fonction createElement
 * cette fonction doit créer un nouveau paragraphe ayant comme id "ex_04_p" et l'ajouter au body
 * le paragraphe doit contenir comme texte "Hello World!"
 */
