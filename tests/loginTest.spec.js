const {test,expect} = require("@playwright/test") // importing test and expect modules
const LoginPage = require("../pages/loginPage") 
const HomePage = require("../pages/homePage") 
const testdata = require("../testData.json") // import test data

test.describe("login test cases",()=>{
    test("Validate error message with valid creds",async ({page})=>{
        const loginPage = await new LoginPage(page)
        const homePage = await new HomePage(page)
        await page.goto(testdata.url)
        await loginPage.enterMailId(testdata.validUser.username)
        await loginPage.enterPassword(testdata.validUser.password)
        await loginPage.clickSignInButton()
        await page.waitForLoadState("networkidle")
        expect(page.locator(homePage.cartButtonXpath)).toBeVisible()
    
    })    

    test("Validate login from Invalid Creds", async ({page})=>{
        const loginPage = await new LoginPage(page)
        const homePage = await new HomePage(page)
        await page.goto(testdata.url)
        await loginPage.enterMailId(testdata.invalidUser.username)
        await loginPage.enterPassword(testdata.validUser.password)
        await loginPage.clickSignInButton()
        await expect(page.locator(loginPage.errorMessageXpath)).toContainText("Doesn't Exist")

    })


})