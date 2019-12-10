class EmployeesPage {
    get textWelcome() {
        return $("#greetings")
    }

    get buttonLogout() {
        return $("p[ng-click^='logout']")
    }

    get buttonCreate(){
        return $("#bAdd")
    }

    get inputFirstName(){
        return $("input[ng-model^='selectedEmployee.firstName']")
    }

    get inputLastName(){
        return $("input[ng-model^='selectedEmployee.lastName']")
    }

    get inputStartDate(){
        return $("input[ng-model^='selectedEmployee.startDate']")
    }

    get inputEmail(){
        return $("input[ng-model^='selectedEmployee.email']")
    }

    get buttonAdd(){
        return $("button=Add")
    }

    get textEmployerCreated(){
        return $("li=Boba Fett")
    }


    welcomeMesagge() {
        this.textWelcome.waitForExist(5000);
        if (this.textWelcome.isExisting()) {
          return true;
        }
        return false;
      
    }

    logout() {
        if (this.buttonLogout.waitForExist(5000)) {
            this.buttonLogout.click()
        }
    }

    createEmployer(){
        if (this.buttonCreate.isClickable()){
            this.buttonCreate.click()
        }
       return false
    }

    typeName(param){
        if(this.inputFirstName.waitForExist(3000)){
            this.inputFirstName.setValue(param)
        }
        return false
        
    }

    typeLastName(param){
        if(this.inputLastName.waitForExist(3000)){
            this.inputLastName.setValue(param)
        }
        return false
    }

    typeSetDate(param){
        if (this.inputStartDate.waitForExist(3000)){
            this.inputStartDate.setValue(param)
        } return false
        
    }

    typeEmail(param){
       if (this.inputEmail.waitForExist(3000)){
        this.inputEmail.setValue(param)
       } return false
        
    }
  
    addEmployer(){
        if (this.buttonAdd.isClickable()){
            this.buttonAdd.click()
        }
       return false
    }

    validateEmployer(){
        this.textEmployerCreated.waitForExist(5000);
        if (this.textEmployerCreated.isExisting()) {
          return true;
        }
        return false;
    }

}

export const employeesPage = new EmployeesPage();
