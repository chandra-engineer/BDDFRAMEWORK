$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/chandra/BDDSELENIUMFRAMEWORK/Feature/Backround.feature");
formatter.feature({
  "line": 1,
  "name": "Add Employee and Delete Same Employee",
  "description": "",
  "id": "add-employee-and-delete-same-employee",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "User Should login with Valid Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "OrangeHrm application Should launch with Chrome browser \"chrome\" and Url \"http://orangehrm.simplifyqa.com:9080/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Should enter Username \"admin\" and Password \"Bitnami.12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User Should click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Should able to see the Homepage and validate login button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 57
    },
    {
      "val": "http://orangehrm.simplifyqa.com:9080/",
      "offset": 74
    }
  ],
  "location": "StepDefinition.orangehrm_application_Should_launch_with_Chrome_browser_and_Url(String,String)"
});
formatter.result({
  "duration": 11680138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    },
    {
      "val": "Bitnami.12345",
      "offset": 49
    }
  ],
  "location": "StepDefinition.user_Should_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 734318900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Login_button()"
});
formatter.result({
  "duration": 2529310600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_able_to_see_the_Homepage_and_validate_login_button()"
});
formatter.result({
  "duration": 39821800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Add Employee in Employee list",
  "description": "",
  "id": "add-employee-and-delete-same-employee;add-employee-in-employee-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Employee Should have FirstName \"chandrasekhar\" And LastName \"kodekandla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Employee Should Enter Login Credential as UserName \"chandra\" And Password \"Bitnami.12345\" And Repassword \"Bitnami.12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Should click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Should logout the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chandrasekhar",
      "offset": 32
    },
    {
      "val": "kodekandla",
      "offset": 61
    }
  ],
  "location": "StepDefinition.employee_Should_have_FirstName_And_LastName(String,String)"
});
formatter.result({
  "duration": 5510356100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandra",
      "offset": 52
    },
    {
      "val": "Bitnami.12345",
      "offset": 75
    },
    {
      "val": "Bitnami.12345",
      "offset": 106
    }
  ],
  "location": "StepDefinition.employee_Should_Enter_Login_Credential_as_UserName_And_Password_And_Repassword(String,String,String)"
});
formatter.result({
  "duration": 876769500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Save_Button()"
});
formatter.result({
  "duration": 4987410400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_logout_the_application()"
});
formatter.result({
  "duration": 1142860800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "User Should login with Valid Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "OrangeHrm application Should launch with Chrome browser \"chrome\" and Url \"http://orangehrm.simplifyqa.com:9080/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Should enter Username \"admin\" and Password \"Bitnami.12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User Should click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Should able to see the Homepage and validate login button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 57
    },
    {
      "val": "http://orangehrm.simplifyqa.com:9080/",
      "offset": 74
    }
  ],
  "location": "StepDefinition.orangehrm_application_Should_launch_with_Chrome_browser_and_Url(String,String)"
});
formatter.result({
  "duration": 10406632700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    },
    {
      "val": "Bitnami.12345",
      "offset": 49
    }
  ],
  "location": "StepDefinition.user_Should_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 360434500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Login_button()"
});
formatter.result({
  "duration": 2495292100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_able_to_see_the_Homepage_and_validate_login_button()"
});
formatter.result({
  "duration": 401310000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Delete the Employee in Employee list",
  "description": "",
  "id": "add-employee-and-delete-same-employee;delete-the-employee-in-employee-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User Should Search with \"chandrasekhar kodekadnla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User Should click on Delete Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Should logout the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chandrasekhar kodekadnla",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_Should_Search_with(String)"
});
formatter.result({
  "duration": 9050302200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Delete_Button()"
});
formatter.result({
  "duration": 6277892800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_logout_the_application()"
});
formatter.result({
  "duration": 1062499100,
  "status": "passed"
});
});