import { test, expect } from '@playwright/test';

test("Element is added to page", async ({ page }) => {
    await page.goto("/pages/ex04")
    await expect(page.getByRole("paragraph")).toBeVisible()
})

test("Element has correct id", async ({ page }) => {
    await page.goto("/pages/ex04")
    await expect(page.getByRole("paragraph")).toHaveId("ex_04_p")
})

test("Element has correct text", async ({ page }) => {
    await page.goto("/pages/ex04")
    await expect(page.getByRole("paragraph")).toHaveText("Hello World!")
})