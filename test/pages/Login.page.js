class LoginPage{
     open(){
        browser.url("/login")
    }

    get inputUsername(){
        return $("input[ng-model^='user.name']")
    }

    get inputPassword(){
        return $("input[type^='password']")
    }

    get buttonLogin(){
        return $("button[type^='submit']")
    }

    typeCredentials(user,pass){
            this.inputUsername.waitForExist()
            this.inputPassword.waitForExist()
            this.inputUsername.setValue(user)
            this.inputPassword.setValue(pass)
            this.buttonLogin.click()
            browser.pause(3000)
        }
}

export const loginPage = new LoginPage();
