import { test, expect } from '@playwright/test';

test("Button has event listener", async ({ page }) => {
    await page.goto("/pages/ex05")
    const el = await page.$("#ex_05_btn")
    const hasHandle = await el.evaluateHandle((node) => !!node.onclick)
    expect(hasHandle).toBeDefined()
})

test("Button click adds class to element", async ({ page }) => {
    await page.goto("/pages/ex05")
    await page.getByRole("button", { name: "change_background" }).click()
    await expect(page.locator("#ex_05_div")).toHaveClass("ex_05_btn_clicked")
})