import { expect, test } from "vitest";
import { getText } from "../src/ex01";


test("returns a promise", () => {
    expect(getText()).toBeInstanceOf(Promise)
})

test("promise resolves correctly", async () => {
    const value = await getText()
    expect(value).toBe("Hello from the past")
})

test("promise runs for around 2 seconds", async () => {
    const start = performance.now()
    await getText()
    const end = performance.now()

    expect(end - start).toBeLessThan(2500)
})