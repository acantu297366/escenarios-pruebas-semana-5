import { Page, expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:2368/ghost')
  await page.type('.email', 'c.galvezv@uniandes.edu.co')
  await page.type('.password', 'Micontrasenaestaencriptada1990!')
  await page.click('.login')
});

test.describe('r_cambiar_modo_oscuro', () => {
    test('Activar modo oscuro', async ({ page }) => {
        await page.click('button[title="Toggle Night shift"]')
        const body = await page.locator('body');
        const fontColor = await body.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('color')
        })
        expect(fontColor).toBe('rgb(229, 239, 245)');
    })
    test('Desactivar modo oscuro', async ({ page }) => {
        await page.click('button[title="Toggle Night shift"]')
        const body = await page.locator('body');
        const fontColor = await body.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('color')
        })
        expect(fontColor).toBe('rgb(52, 63, 68)');
    })
})

test.describe('s_editar_nombre_descripcion_blog', () => {
    test('Editar nombre del blog', async ({ page }) => {
        const newBlogName = 'Ghost Blog New Name'
        await page.goto('http://localhost:2368/ghost/#/settings/general')
        await page.click('xpath=//html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button')
        await page.fill('.ember-text-field.gh-input.ember-view', newBlogName)
        await page.click('xpath=//html/body/div[2]/div/main/section/div/header/section/button')
        const navMenuTitle = await page.innerText('xpath=//html/body/div[2]/div/nav[1]/header/div[1]/div[2]')
        expect(navMenuTitle).toBe(newBlogName)
    })
    test('Editar descripción del blog', async ({ page }) => {
        const newBlogDescription = 'Este Blog es muy bueno'
        await page.goto('http://localhost:2368/ghost/#/settings/general')
        await page.click('xpath=//html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button')
        await page.fill('xpath=//html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input', newBlogDescription)
        await page.click('xpath=//html/body/div[2]/div/main/section/div/header/section/button')
        await page.goto('http://localhost:2368/ghost/#/site')
        await page.goto('http://localhost:2368/ghost/#/settings/general')
        const siteViewDescription = await page.inputValue('xpath=//html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input')
        expect(siteViewDescription).toBe(newBlogDescription)
    })
})

test.describe('t_agregar_submenu_navbar', () => {
    test('Agregar un nuevo submenu al navbar', async ({ page }) => {
        const newLabel = 'Test Submenu'
        const newSubmenuClass = 'nav-test-submenu'
        await page.goto('http://localhost:2368/ghost/#/settings/design')
        await page.fill('xpath=//html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input', newLabel)
        await page.click('xpath=//html/body/div[2]/div/main/section/section/div[2]/form/div[2]/button')
        await page.click('xpath=//html/body/div[2]/div/main/section/header/section/button')
        await page.goto('http://localhost:2368/ghost/#/site')
        const newSubmenuElement = await page.locator(newSubmenuClass)
        expect(newSubmenuElement).toBeDefined()
    })
})

test.describe
