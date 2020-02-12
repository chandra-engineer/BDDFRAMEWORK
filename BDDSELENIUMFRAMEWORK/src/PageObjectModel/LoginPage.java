package PageObjectModel;

import com.GenericMethods.GenericCommonMethods;
import com.GenericMethods.XmlObjects;

public class LoginPage {

	public void launch(String broswerName, String url) {

		//GenericCommonMethods.cleanupBrowser();
		GenericCommonMethods.launchApplication(broswerName, url);

	}

	public void login(String username, String password, int timeout) {
		GenericCommonMethods.enterValue(XmlObjects.getelement("username"), username, timeout);
		GenericCommonMethods.enterValue(XmlObjects.getelement("password"), password);

	}

	public void clicklogin(int timeout) {
		GenericCommonMethods.clicklink(XmlObjects.getelement("loginButton"), timeout);
	}
	
	public void logout() {
		GenericCommonMethods.clicklink(XmlObjects.getelement("welcomeButton"), 10);
		GenericCommonMethods.clicklink(XmlObjects.getelement("LogoutButton"), 10);
	}

}
