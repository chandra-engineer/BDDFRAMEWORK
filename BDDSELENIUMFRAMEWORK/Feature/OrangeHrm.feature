Feature: Login into the application
Scenario: User Should login with Valid Credential 
    Given OrangeHrm application Should launch with Chrome browser "chrome" and Url "http://orangehrm.simplifyqa.com:9080/"
    When User Should enter Username "admin" and Password "Bitnami.12345"
    And User Should click on Login button 
    Then User Should able to see the Homepage and validate login button
	