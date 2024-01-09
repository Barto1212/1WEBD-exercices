/**
 * Créer une class Animal avec une methode makeSound()
 * Ajouter des getters et setters pour une proprieté name dans Animal
 * Créer une class Dog qui étend Animal
 * L'appel a makeSound de Dog doit renvoier "bark!"
 */

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  get tellYourName() {
    return this.name
  }

  makeSound() {
    return this.sound;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "bark!");
  }
}

/**
 * ne pas effacer cette partie
 */
module.exports = {
  Animal,
  Dog,
};
