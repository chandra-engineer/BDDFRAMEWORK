package StepDefinition;

import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.GenericMethods.GenericCommonMethods;
import com.GenericMethods.GlobalVariables;
import com.GenericMethods.XmlObjects;

import PageObjectModel.Addemployee;
import PageObjectModel.LoginPage;
import cucumber.api.java.en.*;

public class StepDefinition {
	LoginPage loginpage = new LoginPage();
	Addemployee employee = new Addemployee();

	@Given("^OrangeHrm application Should launch with Chrome browser \"([^\"]*)\" and Url \"([^\"]*)\"$")
	public void orangehrm_application_Should_launch_with_Chrome_browser_and_Url(String broswerName, String url)
			throws Throwable {
		loginpage.launch(broswerName, url);
	}

	@When("^User Should enter Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void user_Should_enter_Username_and_Password(String username, String password) throws Throwable {
		loginpage.login(username, password, 20);

	}

	@When("^User Should click on Login button$")
	public void user_Should_click_on_Login_button() throws Throwable {
		loginpage.clicklogin(20);

	}

	@Then("^User Should able to see the Homepage and validate login button$")
	public void user_Should_able_to_see_the_Homepage_and_validate_login_button() throws Throwable {

		WebElement Welcome = GenericCommonMethods.creatElement(XmlObjects.getelement("welcomeButton"));

		if (Welcome.isDisplayed()) {
			System.out.println("Application Successfully  Navigated to Homepage ");

		} else {
			System.out.println("Application is not able to navigate Homepage ");
			Assert.assertTrue(false, "Application is not able to navigate Homepage ");

		}

	}

	//

	@Given("^Employee Should have FirstName \"([^\"]*)\" And LastName \"([^\"]*)\"$")
	public void employee_Should_have_FirstName_And_LastName(String arg1, String arg2) throws Throwable {
		employee.addEmployee(arg1, arg2);

	}

	@When("^Employee Should Enter Login Credential as UserName \"([^\"]*)\" And Password \"([^\"]*)\" And Repassword \"([^\"]*)\"$")
	public void employee_Should_Enter_Login_Credential_as_UserName_And_Password_And_Repassword(String arg1, String arg2,
			String arg3) throws Throwable {
		employee.addLoginCredentials(arg1, arg2, arg3);
	}

	@When("^User Should click on Save Button$")
	public void user_Should_click_on_Save_Button() throws Throwable {
		Thread.sleep(2000);
		employee.addSaveButton();

	}

	@Then("^User Should logout the application$")
	public void user_Should_logout_the_application() throws Throwable {
		loginpage.logout();
		GlobalVariables.driver.close();

	}

	@Given("^User Should Search with \"([^\"]*)\"$")
	public void user_Should_Search_with(String arg1) throws Throwable {
		employee.firstNameSearchAndvalidate(arg1);
	}

	@When("^User Should click on Delete Button$")
	public void user_Should_click_on_Delete_Button() throws Throwable {

		employee.DeleteEmployee();
		System.out.println(" Successfully Deleted Employee");

	}

}
