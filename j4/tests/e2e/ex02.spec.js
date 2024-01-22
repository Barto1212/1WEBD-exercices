import { test, expect } from "@playwright/test"


test("button has event listener", async ({ page }) => {
    await page.goto("/pages/ex_02")
    const el = await page.$("#ex_02_btn")
    const hasHandle = await el.evaluateHandle((node) => !!node.onclick)
    expect(hasHandle).toBeDefined()
})

test("clicking on button changes image", async ({ page }) => {
    await page.route("https://dog.ceo/api/breeds/image/random", route => {
        route.fulfill({
            status: 200, body: JSON.stringify({
                "message": "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_5045.jpg",
                "status": "success"
            })
        })
    })
    await page.goto("/pages/ex_02")
    await page.getByRole("button").click()
    await expect(page.getByAltText("random_dog")).toHaveAttribute("src", /^https:\/\/images.dog.ceo\/breeds\/*/)
})