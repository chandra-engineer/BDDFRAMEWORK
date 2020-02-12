Feature: Add Employee and Delete Same Employee
Background: User Should login with Valid Credential 
    Given OrangeHrm application Should launch with Chrome browser "chrome" and Url "*********URL******************"
    When User Should enter Username "admin" and Password "password"
    And User Should click on Login button 
    Then User Should able to see the Homepage and validate login button
Scenario: Add Employee in Employee list
    Given Employee Should have FirstName "chandrasekhar" And LastName "kodekandla"
    When Employee Should Enter Login Credential as UserName "chandra" And Password "Bitnami.12345" And Repassword "Bitnami.12345"
    And User Should click on Save Button 
    Then User Should logout the application 
Scenario: Delete the Employee in Employee list
    Given User Should Search with "chandrasekhar kodekadnla"
    When User Should click on Delete Button 
    Then User Should logout the application
