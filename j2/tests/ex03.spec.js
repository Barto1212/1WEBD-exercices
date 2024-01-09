import { afterEach, beforeEach, describe, expect, it, test, vi } from "vitest"
import { readFileSync } from "node:fs"
import { fizzbuzz } from "../src/ex03"

test("fizzbuzz is a function", () => {
    expect(fizzbuzz).toBeTypeOf("function")
})

test("fizzbuzz has 1 argument", () => {
    expect(fizzbuzz.length).toBe(1)
})

describe("fizzbuzz output test", () => {
    let consoleMock = null;

    beforeEach(() => {
        consoleMock = vi.spyOn(console, "log").mockImplementation(() => undefined)
    })
    afterEach(() => {
        consoleMock = null
    })

    it("output test 1", () => {
        fizzbuzz(5)
        expect(consoleMock).toHaveBeenCalled()
        const fileContent = readFileSync("outputs/test1.txt").toString()
        expect(consoleMock.mock.calls.join('\n')).toEqual(fileContent)
    })
    it("output test 1", () => {
        fizzbuzz(100)
        expect(consoleMock).toHaveBeenCalled()
        const fileContent = readFileSync("outputs/test2.txt").toString()
        expect(consoleMock.mock.calls.join('\n')).toEqual(fileContent)
    })
})