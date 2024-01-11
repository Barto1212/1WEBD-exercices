/**
 * créer une fonction replaceText avec un argument newText
 * à l'execution, elle devra trouver et remplacer le text de tous les elements ayant une classe "ex_06_replace_me" par celui reçu en parametre
 *
 */


function replaceText(newText) {
  const elements = document.querySelectorAll(".ex_06_replace_me");
  elements.forEach(function(element) {
    element.textContent = newText;
  });
}
