/**
 * écrivez une fonction keepPositives qui prend un tableau arr en parametre
 * la fonction doit renvoier la somme des nombres positifs contenus dans arr
 */
const keepPositives = (arr) =>
  arr
    .filter((arrayElement) => arrayElement > 0)
    .reduce((acc, curr) => acc + curr, 0);

/**
 * ne pas effacer cette partie
 */
module.exports = {
  keepPositives,
};
