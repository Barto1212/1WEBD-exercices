import { expect, test } from "vitest"
import ex01 from "../src/ex01"

test("Person is a class", () => {
    expect(ex01.Person?.name).toBe("Person")
})

test("Person can introduce itself", () => {
    const tom = new ex01.Person("tom", 42)
    expect(tom.introduction()).toBe("Hi, my name is tom and I'm 42")
})