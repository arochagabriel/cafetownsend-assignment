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
        if (this.inputUsername.isExisting()){
            this.inputUsername.setValue(user)
            this.inputPassword.setValue(pass)
            this.buttonLogin.click()
        }
    }
}
export const loginPage = new LoginPage();
