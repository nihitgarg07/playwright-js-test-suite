class HomePage{
    /**
     * @param {import("@playwright/test").Page} page
     */

    constructor(page){
        this.page=page
        this.cartButtonXpath = "//button[text()='Cart']"
        this.menuButtonXpath = "//img[@alt='menu']"
        this.signOutButtonXpath = "//button[text()='Sign out']"
        this.javaForTestCartXpath="//h2[text()='Java For Tester']/ancestor::div[@class='course-content']/following-sibling::button"
        this.cartCountXpath = "//button[@class='cartBtn']/span"
    }

    async menuClick(){
        await this.page.locator(this.menuButtonXpath).click()
    }

    async signOutClick(){
        await this.page.locator(this.signOutButtonXpath).click()
    }
    async addtoCart(){
        await this.page.locator(this.javaForTestCartXpath).click()
    }

}

module.exports=HomePage;