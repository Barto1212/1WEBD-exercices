import { test, expect } from '@playwright/test';

test("text has changed everywhere", async ({ page }) => {
    await page.goto("/pages/ex05")
    const els = await page.locator(".ex_06_replace_me")
    const allElsHaveText = (await els.evaluateAll((all) => {
        return all.map(el => el.innerText)
    })).filter(el => el !== "toto42")
    expect(allElsHaveText).toHaveLength(0)
})
