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

    login(sUser,sPass){
        if (this.inputUsername.isExisting()){
            this.inputUsername.setValue(sUser)
            this.inputPassword.setValue(sPass)
            this.buttonLogin.click()
        }
    }
}
export const loginPage = new LoginPage();
