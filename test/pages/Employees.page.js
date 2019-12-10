class EmployeesPage {
    get textWelcome() {
        return $("#greetings")
    }

    get buttonLogout() {
        return $("p[ng-click^='logout']")
    }


    welcomeMesagge() {
        this.textWelcome.waitForExist(5000);
        if (this.textWelcome.isExisting()) {
          return true;
        }
        return false;
      
    }

    logout() {
        if (this.buttonLogout.waitForExist(10000)) {
            this.buttonLogout.click()
        }
    }



}

export const employeesPage = new EmployeesPage();
