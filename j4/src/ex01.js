/**
 * créer une fonction getText qui renvoie une promesse
 * cette promesse devra renvoier le texte "Hello from the past" après 2 secondes
 */

function getText() {
  const ceciEstUnePromesse = new Promise((resolve) => {
    setTimeout(resolve, 2000, "Hello from the past");
  });
  return ceciEstUnePromesse
}

/**
 * ne pas effacer cette partie
 */
module.exports = {
  getText,
};
