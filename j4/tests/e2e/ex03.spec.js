import { test, expect } from "@playwright/test";

test("initial Data", async ({ page }) => {
    await page.goto("/pages/ex_03")
    await page.waitForSelector(".sw_char", { timeout: 200000 })
    await expect(page.locator(".sw_char")).toHaveCount(10)
})

test("more data", async ({ page }) => {
    await page.goto("/pages/ex_03")
    await page.waitForSelector(".sw_char", { timeout: 200000 })
    await page.getByRole("button").click()
    await page.waitForSelector(".sw_char", { timeout: 200000 })
    await expect(page.locator(".sw_char")).toHaveCount(20)



})