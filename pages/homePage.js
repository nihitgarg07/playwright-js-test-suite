class HomePage{
    /**
     * @param {import("@playwright/test").Page} page
     */

    constructor(page){
        this.page=page
        this.cartButtonXpath = "//button[text()='Cart']"
        this.menuButtonXpath = "//img[@alt='menu']"
        this.signOutButtonXpath = "//button[text()='Sign out']"
    }

    async menuClick(){
        await this.page.locator(this.menuButtonXpath).click()
    }

    async signOutClick(){
        await this.page.locator(this.signOutButtonXpath).click()
    }


}

module.exports=HomePage;