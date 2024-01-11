/**
 * écrire une fonction setupEventListeners
 * elle devra ajouter un event listener sur le click du bouton ayant comme id "ex_05_btn"
 * au click du bouton, le div ayant comme id "ex_05_div" doit obtenir une classe "ex_05_btn_clicked"
 */

function setupEventListeners() {
  const button = document.getElementById("ex_05_btn");
  if (button) {
    button.addEventListener("click", () => {
      const div = document.getElementById("ex_05_div");
      if (div) {
        div.classList.add("ex_05_btn_clicked");
      }
    });
  }
}
