const {expect,test} = require("@playwright/test")
const LoginPage = require("../pages/loginPage")
const HomePage = require("../pages/homePage")
const testData = require("../testData.json")

test.describe("Home Page Test Cases",()=>{
    test("Validate logout",async ({page})=>{
        const loginPage = new LoginPage(page)
        const homePage = new HomePage(page)
        await page.goto(testData.url)
        await loginPage.enterMailId(testData.validUser.username)
        await loginPage.enterPassword(testData.validUser.password)
        await loginPage.clickSignInButton()
        await page.waitForLoadState("networkidle")
        await homePage.menuClick()
        await homePage.signOutClick()
        expect(page).toHaveURL(/login/)
        expect(page.locator(loginPage.SignInTextXpath)).toContainText("Sign In")

    })

    test("Validate Add to Cart",async ({page})=>{
        const loginPage = new LoginPage(page)
        const homePage = new HomePage(page)
        await page.goto(testData.url)
        await loginPage.enterMailId(testData.validUser.username)
        await loginPage.enterPassword(testData.validUser.password)
        await loginPage.clickSignInButton()
        await page.waitForLoadState("networkidle")
        await homePage.addtoCart()
        expect(page.locator(homePage.javaForTestCartXpath)).toContainText("Remove from Cart")
        expect(page.locator(homePage.cartCountXpath)).toHaveText("1")


    })


})