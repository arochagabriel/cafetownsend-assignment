import { assert } from "chai";
import { Given, When, Then } from "cucumber";
import {employeesPage} from "../pages/Employees.page";


When(/^The user clicks on Create button$/, () => {
    employeesPage.createEmployer();
  });

Then(/^it fills up the First name '(.+)'$/,(name) =>{
  employeesPage.typeName(name)

})

Then(/^it fills up the Last name '(.+)'$/,(lastname) =>{
  employeesPage.typeLastName(lastname)
  
})

Then(/^it fills up the start date '(.+)'$/,(startdate) =>{
  employeesPage.typeSetDate(startdate)
})

Then(/^it fills up the email '(.+)'$/,(email) =>{
  employeesPage.typeEmail(email)
})

Then(/^it clicks on Add button$/,() =>{
  employeesPage.addEmployer()
})

Then(/^it shows the full name '(.+)' as a user created in the employees list$/,(employer) =>{
  employeesPage.validateEmployer()
  assert.equal(employeesPage.textEmployerCreated.getText(), employer)
})
