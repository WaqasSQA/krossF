
const test_data = require ('../testData/tData.json')
const usable_locators = require ('../pom/signUp')

exports.login = class login{
    constructor(page){
        this.page = page
        this.loginBtn = "//a[contains(text(),'로그인')]",  
        this.userIDField = "#userid",    
        this.passwordField = "#password",  
        this.submitBtn = ".button"
    }

    async actions(){
        await this.page.locator(this.loginBtn).click()
        await this.page.locator(this.userIDField).fill(test_data.id)
        await this.page.locator(this.passwordField).fill(test_data.password)
        await this.page.locator(this.submitBtn).click()
    }
}