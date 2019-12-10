class EmployeesPage{
    get textWelcome(){
        return $("#greetings")
    }

    get buttonLogout(){
        return $("p[ng-click^='logout()']")
    }
    
    
    welcomeMesagge(message) {
        if (this.textWelcome.isExisting()) {
          return true;
        }
        return false;
      }

    logout(){
        if (this.buttonLogout.isEnable()){
            this.buttonLogout.click()
        }
    }



}

export const employeesPage = new EmployeesPage();
