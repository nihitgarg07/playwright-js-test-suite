const {test,expect} = require("@playwright/test") // importing test and expect modules
 
const testdata = JSON.parse(JSON.stringify(require("../testData.json"))) // import test data

test.describe("login test cases",()=>{
    test("Validate error message with invalid creds",async ({page})=>{
        await page.goto(testdata.url)
    
    })    


})