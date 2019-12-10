import { assert } from "chai";
import { Given, When, Then } from "cucumber";
import {loginPage} from "..pages/Login.page"
import {employeesPage} from "..pages/Employees.page"


Given(/^The user navigates to cafetownsend site$/, () => {
    loginPage.open();
  });

When(/^The user logs in with user '(.+)' and pass '(.+)'$/, user, pass => {
loginPage.typeCredentials(user,pass)
});

Then(/^it shows a welcome message '(.+)'$/, message => {
   assert.equal(employeesPage.welcomeMesagge(message), 'Hello Luke')
});


Then(/^The user logs out$/, () => {
    employeesPage.logout()
});
