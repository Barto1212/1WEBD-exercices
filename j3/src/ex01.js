/**
 * Créer une class Person avec:
 * - name (string)
 * - age (number)
 * - une methode introduction() qui renvoie "Hi, my name is <name> and I'm <age>"
 */

class Person {
  constructor(nameConstructor, ageConstructor) {
    this.name = nameConstructor;
    this.age = ageConstructor;
  }
  introduction() {
    return `Hi, my name is ${this.name} and I'm ${this.age}`;
  }
}

/**
 * ne pas effacer cette partie
 */
module.exports = {
  Person,
};
