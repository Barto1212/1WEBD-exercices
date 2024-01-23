const cowsay = require("cowsay");
const math = require("./math.js");

const a = 1;
const b = 2;

console.log(
  cowsay.say({
    text: `bonjour ${a} + ${b} font ${math.add(a, b)}`,
    e: "oO",
    T: "U ",
  })
);
