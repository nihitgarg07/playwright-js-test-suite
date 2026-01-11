
const userNameGen = require("../utils/userNameGen")
class RegisterationPage{

     /**
      * @param {import("@playwright/test").Page } page
      */

        constructor(page){
            this.page=page
            this.inputNameXpath = "//input[@id='name']"
            this.inputEmailXpath = "//input[@id='email']"
            this.inputPasswordXpath = "//input[@id='password']"
            this.seleniumCheckboxXpath = "//label[text()='Selenium']"
            this.TestNGcheckboxXpath = "//label[text()='TestNG']"
            this.femaleRadioXpath = "//input[@id='gender2']"
            this.stateDropdownXpath = "//select[@id='state']"
            this.hobbiesDrowpdownXpath = "//select[@id='hobbies']"   
            this.submitButtonDropdownXpath = "//button[text()='Sign up']" 

        }

        async enterName(){
            await this.page.locator(this.inputNameXpath).fill("Nihit")
        }

        async enterEmail(){
            let userName = await userNameGen()
            await this.page.locator(this.inputEmailXpath).fill(userName)
        }

        async enterPassword(){
            await this.page.locator(this.inputPasswordXpath).fill("Password@12345")
        }

        async checkInterest(){
            await this.page.locator(this.seleniumCheckboxXpath).click()
            await this.page.locator(this.TestNGcheckboxXpath).click()
        }

        async selectGender(){
            await this.page.locator(this.femaleRadioXpath).click()
        }

        async selectstate(){
            await this.page.locator(this.stateDropdownXpath).selectOption({value:"Uttar Pradesh"}) 
        }

        async selectHobby(){
            await this.page.locator(this.hobbiesDrowpdownXpath).selectOption(['Swimming','Playing']) 
        }
        async clickSignUp(){
            await this.page.locator(this.submitButtonDropdownXpath).click()
        }

}

module.exports = RegisterationPage;