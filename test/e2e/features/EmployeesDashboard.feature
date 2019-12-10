Feature: Employees dashboard menu

Background: 
    Given The user navigates to cafetownsend site 
     When The user logs in with username 'Luke' and pass 'Skywalker'
     Then it shows a welcome message 'Hello Luke'


 Scenario: Create an employer
     When The user clicks on Create button
     Then it fills up the First name 'Boba'
     Then it fills up the Last name 'Fett'
     Then it fills up the start date '1978-11-17'
     Then it fills up the email 'b.fett@kamino.nl' 
     Then it clicks on Add button
     Then it shows the full name 'Boba Fett' as a user created in the employees list


Scenario: Delete user created
    When The user clicks on Boba Fett
    Then it clicks on Delete button