package PageObjectModel;

import com.GenericMethods.GenericCommonMethods;
import com.GenericMethods.XmlObjects;

public class Addemployee {

	public void addEmployee(String Firstname, String LastName) throws Throwable {
		GenericCommonMethods.clicklink(XmlObjects.getelement("PIM"), 20);
		Thread.sleep(2000);
		GenericCommonMethods.clicklink(XmlObjects.getelement("AddEmployee"), 20);
		GenericCommonMethods.enterValue(XmlObjects.getelement("FirstName"), Firstname, 20);
		GenericCommonMethods.enterValue(XmlObjects.getelement("LastName"), LastName, 20);

	}

	public void addLoginCredentials(String Username, String Password, String Repassword) {
		GenericCommonMethods.clicklink(XmlObjects.getelement("LogincredentialBUtton"), 20);
		GenericCommonMethods.enterValue(XmlObjects.getelement("Username"), Username, 20);
		GenericCommonMethods.enterValue(XmlObjects.getelement("Password"), Password, 20);
		GenericCommonMethods.enterValue(XmlObjects.getelement("Repassword"), Repassword, 20);

	}

	public void addSaveButton() {
		GenericCommonMethods.clicklink(XmlObjects.getelement("SaveButton"), 20);
	}

	public void firstNameSearchAndvalidate(String SearchExitsEmployeeName) throws Throwable {
		GenericCommonMethods.clicklink(XmlObjects.getelement("PIM"), 20);
		Thread.sleep(2000);
		GenericCommonMethods.clicklink(XmlObjects.getelement("EmployeeList"), 20);
		GenericCommonMethods.clicklink(XmlObjects.getelement("SearchButton"), 20);
		Thread.sleep(2000);
		GenericCommonMethods.enterValue(XmlObjects.getelement("SearchExitsEmployeeName"), SearchExitsEmployeeName, 20);
		Thread.sleep(2000);
		GenericCommonMethods.clicklink(XmlObjects.getelement("SearchButton"), 20);
	}

	public void DeleteEmployee() {
		GenericCommonMethods.clicklink(XmlObjects.getelement("DelectCheckBox"), 30);
		GenericCommonMethods.clicklink(XmlObjects.getelement("DeleteButton"), 20);
		GenericCommonMethods.clicklink(XmlObjects.getelement("DeleteDialoguBox"), 20);

	}

}
