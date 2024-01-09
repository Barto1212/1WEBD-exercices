import { expect, test } from "vitest"
import { keepPositives } from "../src/ex02"

test("keepPositives is a function", () => {
    expect(keepPositives).toBeTypeOf("function")
})

test("keepPositives has 1 argument", () => {
    expect(keepPositives.length).toBe(1)
})

test("only positives", () => {
    expect(keepPositives([1, 2, 3])).toBe(6)
})

test("empty", () => {
    expect(keepPositives([])).toBe(0)
})

test("only negatives", () => {
    expect(keepPositives([-3, -2])).toBe(0)
})

test("mix", () => {
    expect(keepPositives([-3, -2, 10, 0, -8, 300])).toBe(310)

})