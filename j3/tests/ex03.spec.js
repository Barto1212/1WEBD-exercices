import { expect, test } from "vitest";
import { Shape, Circle, Square } from "../src/ex03";

test("All classes", () => {
  expect(Shape?.name).toBe("Shape");
  expect(Square?.name).toBe("Square");
  expect(Circle?.name).toBe("Circle");
});

test("All inherit from Shape", () => {
  expect(Circle.prototype).toBeInstanceOf(Shape);
  expect(Square.prototype).toBeInstanceOf(Shape);
});

test("Circle surface", () => {
  const c = new Circle(10);
  expect(c.getSurface()).toBe(10 * 10 * Math.PI);
});

test("Square surface", () => {
  const s = new Square(10);
  expect(s.getSurface()).toBe(100);
});
