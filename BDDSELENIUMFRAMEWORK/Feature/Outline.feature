Feature: Login into the application
Scenario Outline: User Should login with Valid Credential 	
    Given OrangeHrm application Should launch with Chrome browser "chrome" and Url "*******URL************"
    When User Should enter Username "<email>" and Password "<password>"
    And User Should click on Login button 
    Then User Should able to see the Homepage and validate login button
	Examples:
		|email	|password|
		|admin	|12345|
		|admin	|admin123|
