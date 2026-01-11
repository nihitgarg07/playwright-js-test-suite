
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
        this.errorMessageXpath = "//h2[@class='errorMessage']"
        this.SignInTextXpath = "//h2[text()='Sign In']"
    }

    async enterMailId(UserName){
        await this.page.locator(this.userNameXpath).fill(UserName)
    }
    async enterPassword(password){
        await this.page.locator(this.passwordXpath).fill(password)
    }
    async clickSignInButton(){
        await this.page.locator(this.signInButtonXpath).click()
    }
    async clickSignUpButton(){
        await this.page.locator(this.signUpButtonXpath).click()
    }

}

module.exports= LoginPage;