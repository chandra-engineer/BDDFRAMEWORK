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
  "duration": 12269536800,
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
  "duration": 564614600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Login_button()"
});
formatter.result({
  "duration": 2485162800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Should_able_to_see_the_Homepage_and_validate_login_button()"
});
formatter.result({
  "duration": 40065700,
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
  "duration": 23816262600,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 20 seconds waiting for presence of element located by: By.xpath: //INPUT[@id\u003d\u0027firstName\u0027]\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-UK0NOQ4\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63114}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\CHANDR~1\\AppData\\Local\\Temp\\scoped_dir3064_392557180}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3c5b08bfe3217e83373652b60389f50\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\r\n\tat com.GenericMethods.GenericCommonMethods.creatElement(GenericCommonMethods.java:123)\r\n\tat com.GenericMethods.GenericCommonMethods.enterValue(GenericCommonMethods.java:165)\r\n\tat PageObjectModel.Addemployee.addEmployee(Addemployee.java:11)\r\n\tat StepDefinition.StepDefinition.employee_Should_have_FirstName_And_LastName(StepDefinition.java:56)\r\n\tat ✽.Given Employee Should have FirstName \"chandrasekhar\" And LastName \"kodekandla\"(C:/chandra/BDDSELENIUMFRAMEWORK/Feature/Backround.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//INPUT[@id\u003d\u0027firstName\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.100)\n  (Driver info: chromedriver\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-UK0NOQ4\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63114}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\CHANDR~1\\AppData\\Local\\Temp\\scoped_dir3064_392557180}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3c5b08bfe3217e83373652b60389f50\n*** Element info: {Using\u003dxpath, value\u003d//INPUT[@id\u003d\u0027firstName\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat com.GenericMethods.GenericCommonMethods.creatElement(GenericCommonMethods.java:123)\r\n\tat com.GenericMethods.GenericCommonMethods.enterValue(GenericCommonMethods.java:165)\r\n\tat PageObjectModel.Addemployee.addEmployee(Addemployee.java:11)\r\n\tat StepDefinition.StepDefinition.employee_Should_have_FirstName_And_LastName(StepDefinition.java:56)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Should_click_on_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Should_logout_the_application()"
});
formatter.result({
  "status": "skipped"
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
