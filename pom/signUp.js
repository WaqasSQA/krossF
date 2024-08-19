
const test_data = require ('../testData/tData.json')
exports.signUp = class signUp {
    constructor(page){
        this.page = page
        this.loginBtn = "//a[contains(text(),'로그인')]",
        this.signUpBtn = "//a[@class='signup']",
        this.userIDField = "#userid",
        this.passwordField = "#password",
        this.confirmPasswordField = "#password_confirm"
        this.submitBtn = ".button"
    }

    async actions(){
        await this.page.locator(this.loginBtn).click()
        await this.page.locator(this.signUpBtn).click()
        await this.page.locator(this.userIDField).fill(test_data.id)
        await this.page.locator(this.passwordField).fill(test_data.password)
        await this.page.locator(this.confirmPasswordField).fill(test_data.password)
        await this.page.locator(this.submitBtn).click()
    }
}