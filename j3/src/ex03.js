/**
 * Créer une classe abstraite Shape avec une methode getSurface
 * Implentez deux classes derivées: Circle et Square
 * Circle doit prendre le rayon r en parametre
 * Square doit prendre la longueur l en parametre
 * chaque classe derivée devra implementer sa propre version de getSurface
 */

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error(
        "Shape est une classe abstraite, elle ne doit pas être initialisée seule"
      );
    }
  }
  getSurface() {
    return "not implemented";
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  getSurface() {
    return this.r * this.r * Math.PI;
  }
}

class Square extends Shape {
  constructor(l) {
    super();
    this.l = l;
  }
  getSurface() {
    return this.l * this.l;
  }
}

/**
 * ne pas effacer cette partie
 */
module.exports = {
  Shape,
  Circle,
  Square,
};
