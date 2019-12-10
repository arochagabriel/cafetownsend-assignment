Feature: Authentication

Background: 
    Given The user navigates to cafetownsend site 

Scenario: Login/Logout with valid credential
    When The user logs in with username 'Luke' and pass 'Skywalker'
    Then it shows a welcome message 'Hello Luke'
    Then The user logs out

Scenario: Invalid credential
    When The user logs in with username 'Minch' and pass 'Yoda'
    Then It shows an error message 'Invalid username or password!'




