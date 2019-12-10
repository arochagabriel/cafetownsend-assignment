Feature: cafeTownSend

Background: 
    Given The user navigates to cafetownsend site 

Scenario: Login/Logout with valid credential
    When The user logs in with user 'Luke' and pass 'Skywalker'
    Then it shows a welcome message 'Hello Luke'
    Then The user logs out

Scenario: Invalid credential
    When The user logs in with user 'Minch' and pass 'Yoda'
    Then it shows an error message 'Invalid username or password!'

Scenario: Create an employer
    When The user clicks on 'Create' button
    Then it fills up the First name 'Boba'
    Then it fills up the Last name 'Fett'
    Then it fills up the start date '1978-11-17'
    Then it fills up the email 'b.fett@kamino.nl' 
    Then it clicks on 'Add' button
    Then it shows the full name 'Boba Fett' as a user created in the employees list


