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

    get textInvalidcredentials(){
        return $(".error-message")
    }

    typeCredentials(user,pass){
            this.inputUsername.waitForExist()
            this.inputPassword.waitForExist()
            this.inputUsername.setValue(user)
            this.inputPassword.setValue(pass)
            this.buttonLogin.click()
            browser.pause(1500)
    }

    invalidCredentials(){
        this.textInvalidcredentials.waitForExist(3000);
        if (this.textInvalidcredentials.isExisting()) {
          return true;
        }
        return false;
    }
}

export const loginPage = new LoginPage();
