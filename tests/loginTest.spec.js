const {test,expect} = require("@playwright/test") // importing test and expect modules
const LoginPage = require("../pages/loginPage") 
const HomePage = require("../pages/homePage") 
const testdata = JSON.parse(JSON.stringify(require("../testData.json"))) // import test data

test.describe("login test cases",()=>{
    test("Validate error message with invalid creds",async ({page})=>{
        const loginPage = await new LoginPage(page)
        const homePage = await new HomePage(page)
        await page.goto(testdata.url)
        await loginPage.enterMailId()
        await loginPage.enterPassword()
        await loginPage.clickSignInButton()
        await page.waitForLoadState("networkidle")
        expect(page.locator(homePage.cartButtonXpath)).toBeVisible()
    
    })    

    // test("Validate logout", async ({page})=>{
    //     const loginPage = await new LoginPage(page)
    //     const homePage = await new HomePage(page)

    // })


})