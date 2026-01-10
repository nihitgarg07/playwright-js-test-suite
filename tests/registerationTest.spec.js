const {expect,test} = require("@playwright/test")
const testData = require("../testData.json")
const LoginPage = require("../pages/loginPage")
const RegisterationPage = require("../pages/registerationPage")

test.describe("Registeration Page testCases",()=>{
    test("Validate Registeration",async ({page})=>{
        const loginPage = await new LoginPage(page)
        const registerationPage = await new RegisterationPage(page)
        await page.goto(testData.url)
        await loginPage.clickSignUpButton()
        await registerationPage.enterName()
        await registerationPage.enterEmail()
        await registerationPage.enterPassword()
        await registerationPage.checkInterest()
        await registerationPage.selectGender()
        await registerationPage.selectstate()
        await registerationPage.selectHobby()
        await registerationPage.clickSignUp()
        await expect(page.locator(loginPage.toastMessageXPATH)).toBeVisible()
        await expect(page).toHaveURL(/login/)

    })

})