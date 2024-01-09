import { expect, test } from "vitest"
import ex01 from "../src/ex01"

test("var1 is text", () => {
    expect(ex01.var1).toBeTypeOf("string")
})

test("var2 is number", () => {
    expect(ex01.var2).toBeTypeOf("number")
})

test("emptyArr is an array and empty", () => {
    expect(Array.isArray(ex01.emptyArr)).toBeTruthy()
    expect(ex01.emptyArr.length).toBe(0)
})

test("filledArray contains var1 and var2", () => {
    expect(Array.isArray(ex01.filledArr)).toBeTruthy()
    expect(ex01.filledArr.length).toBe(2)
    expect(ex01.filledArr.at(0)).toBe(ex01.var1)
    expect(ex01.filledArr.at(1)).toBe(ex01.var2)
})