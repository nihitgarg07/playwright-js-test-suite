const {test,expect} = require("@playwright/test") // importing test and expect modules
const LoginPage = require("../pages/loginPage") 
 
const testdata = JSON.parse(JSON.stringify(require("../testData.json"))) // import test data

test.describe("login test cases",()=>{
    test("Validate error message with invalid creds",async ({page})=>{
        const loginPage = new LoginPage(page)
        await page.goto(testdata.url)

        
    
    })    


})