/**
 * definir une fonction fizzbuzz qui prend en parametre un nombre n
 * pour chaque nombre entre 1 et n (inclus)
 * - si le numero est multiple de 3, afficher "fizz"
 * - si le numero est multiple de 5, afficher "buzz"
 * - si le numero est multiple de 3 et 5, afficher "fizzbuzz"
 * - sinon, afficher le nombre
 * - tous les affichages doivent etre suivis d'un retour à la ligne
 */

function fizzbuzz(n) {
  for (let index = 1; index <= n; index++) {
    if (index % 15 === 0) {
      console.log("fizzbuzz");
    } else if (index % 3 === 0) {
      console.log("fizz");
    } else if (index % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(index);
    }
  }
}


const array = []
/**
 * ne pas effacer cette partie
 */
module.exports = {
  fizzbuzz,
};
