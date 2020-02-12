package com.GenericMethods;

import org.openqa.selenium.WebDriver;

public class GlobalVariables {

	private static final String CHROME_EXCUTABLEPATH = "C:\\chandra\\BDDSELENIUMFRAMEWORK\\Drivers\\chromedriver.exe";

	private static final String FIREFOX_EXCUTABLEPATH = "";

	private static final String IE_EXCUTABLEPATH = "";

	private static final String EDGE_EXCUTABLEPATH = "";
	
	public static WebDriver driver;
	
	

	public static String getDriverpath(String browserName) {

		switch (browserName.toLowerCase()) {

		case "chrome":

			return CHROME_EXCUTABLEPATH;
		case "firefox":

			return FIREFOX_EXCUTABLEPATH;

		case "ie":
			return IE_EXCUTABLEPATH;

		default:
			return EDGE_EXCUTABLEPATH;

		}

	}

}
