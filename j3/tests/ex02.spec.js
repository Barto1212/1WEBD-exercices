import { expect, test } from "vitest";
import { Animal, Dog } from "../src/ex02";

test("Animal is class", () => {
    expect(Animal?.name).toBe("Animal")

})

test("Dog is class", () => {
    expect(Dog?.name).toBe("Dog")

})

test("Dog inherits from Animal", () => {
    expect(Dog.prototype).toBeInstanceOf(Animal)
})

test("Dog barks", () => {
    const labrador = new Dog("nessy")
    expect(labrador.makeSound()).toBe("bark!")
})

test("Dog has name", () => {
    const terrier = new Dog("lassy")
    expect(terrier.name).toBe("lassy")
})