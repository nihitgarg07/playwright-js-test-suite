
const testData = require("../testData.json")

class LoginPage{

    /**
   * @param {import('@playwright/test').Page} page
   */

    
    constructor(page){
        this.page=page
        this.userNameXpath = "//input[@id='email1']"
        this.passwordXpath = "//input[@id='password1']"
        this.signInButtonXpath = "//button[text()='Sign in']"
        this.signUpButtonXpath = "//a[contains(text(),'New user')]"
        this.toastMessageXPATH = "//div[@role='alert']"
    }

    async enterMailId(){
        await this.page.locator(this.userNameXpath).fill(testData.validUser.username)
    }
    async enterPassword(){
        await this.page.locator(this.passwordXpath).fill(testData.validUser.password)
    }
    async clickSignInButton(){
        await this.page.locator(this.signInButtonXpath).click()
    }
    async clickSignUpButton(){
        await this.page.locator(this.signUpButtonXpath).click()
    }

}

module.exports= LoginPage;