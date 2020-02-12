package com.GenericMethods;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class GenericCommonMethods {

	/**
	 * This function performs ,when browser launch its clear the cache data we
	 * should call this method before launch the application
	 * 
	 * @author Chandra Sekhar
	 */
	public static void cleanupBrowser() {

		try {
			Runtime.getRuntime().exec("taskkill /F /IM chromedriver.exe");
			Runtime.getRuntime().exec("taskkill /F /IM chrome.exe");
			Runtime.getRuntime().exec("taskkill /F /IM geckodriver.exe");
			Runtime.getRuntime().exec("taskkill /F /IM firefox.exe");
			Runtime.getRuntime().exec("taskkill /F /IM iexplore.exe");
			Runtime.getRuntime().exec("taskkill /F /IM microsoftedge.exe");
			Runtime.getRuntime().exec("taskkill /F /IM microsoftwebdriver.exe");
			Runtime.getRuntime().exec("taskkill /F /IM IEDriverServer.exe");

		} catch (IOException e) {

			System.out.println(e.getMessage());
		}

	}

	/**
	 * This method launch the application
	 * 
	 * @param BrowserName should pass as {chrome,firfox,ie,edge} if not provide any
	 *                    browser name which is launch by default with the chrome
	 *                    browser
	 * @param Url         must be required to launchapplication
	 * 
	 * @author Chandra Sekhar
	 */

	public static void launchApplication(String broswerName, String url) {

		broswerName = (broswerName == null) ? "chrome" : broswerName;
		switch (broswerName.toLowerCase()) {
		case "chrome":
			// System.setProperty("webdriver.chrome.driver",GlobalVariables.getDriverpath("chrome"));
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-notifications");
			options.addArguments("--dns-prefetch-disable");
			GlobalVariables.driver = new ChromeDriver(options);
			break;
		case "firefox":
			System.setProperty("webdriver.gecko.driver", GlobalVariables.getDriverpath("firefox"));
			GlobalVariables.driver = new FirefoxDriver();
			break;
		case "ie":
			System.setProperty("webdriver.InternetExplorale.driver", GlobalVariables.getDriverpath("ie"));
			GlobalVariables.driver = new InternetExplorerDriver();
			break;
		case "edge ":
			System.setProperty("webdriver.edge.driver", GlobalVariables.getDriverpath("edge"));
			GlobalVariables.driver = new EdgeDriver();
			break;
		default:
			Assert.assertFalse(true, "the given Browser :" + broswerName
					+ "is invalid.Browsermust be given any of the list ('chrome','firefox','edge','ie'");
			break;

		}
		GlobalVariables.driver.get(url);

		String url2 = GlobalVariables.driver.getTitle();
		GlobalVariables.driver.manage().window().maximize();
		GlobalVariables.driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

		if (url2.contains("OrangeHRM")) {
			System.out.println("Application took Right Url and lauched correct browser url");
		} else {
			System.out.println(
					"Application not launched Right url ,hence its took wrong url and launched wrong URL.Please check Right_one "
							+ url.toString());
			Assert.assertFalse(true, "Its took wrong url  ");
		}

	}
	public static void closeBrowser() {
		GlobalVariables.driver.close();
	}
	
	
	public static WebElement creatElement(By by) {
		WebElement element;
		try {
			element = GlobalVariables.driver.findElement(by);
		} catch (NoSuchElementException nse) {
			element = null;
		}
		return element;

	}

	public static WebElement creatElement(By by, int timeout) {
		WebElement element;
		try {
			WebDriverWait wait = new WebDriverWait(GlobalVariables.driver, timeout);
			wait.pollingEvery(200, TimeUnit.MILLISECONDS);
			element = wait.until(ExpectedConditions.presenceOfElementLocated(by));
		} catch (NoSuchElementException nse) {
			element = null;

		}
		return element;

	}

	public static boolean iselementVisible(WebElement element, int timeout) {
		boolean isVisible = false;

		try {
			WebDriverWait wait = new WebDriverWait(GlobalVariables.driver, timeout);
			wait.pollingEvery(200, TimeUnit.MILLISECONDS);
			wait.until(ExpectedConditions.visibilityOf(element));
			isVisible = true;
		} catch (RuntimeException r) {
			isVisible = false;
		}

		return isVisible;
	}

	public static boolean iselementEnable(WebElement element, int timeout) {

		boolean isEnable = false;
		try {
			WebDriverWait wait = new WebDriverWait(GlobalVariables.driver, timeout);
			wait.pollingEvery(200, TimeUnit.MILLISECONDS);
			wait.until(ExpectedConditions.elementToBeClickable(element));
			isEnable = true;
		} catch (RuntimeException r) {

			isEnable = false;

		}
		return isEnable;

	}

	public static void enterValue(By by, String valueToenter, int timeout) {
		WebElement element = creatElement(by, timeout);

		if (element != null) {
			if (iselementVisible(element, timeout)) {

				if (iselementEnable(element, timeout)) {
					element.clear();
					element.sendKeys(valueToenter);

				} else {
					System.out.println("Unable to enter the value into field " + element.toString()
							+ "is not enable after waiting " + timeout);
				}

			} else {
				System.out.println("Unable to enter the value into field " + element.toString()
						+ "is not visible after waiting " + timeout);
			}

		} else {
			System.out.println("Unable to enter the value into field " + element.toString()
					+ "is not found after waiting " + timeout);
		}

	}

	public static void enterValue(By by, String valueToenter) {
		WebElement element = creatElement(by);

		if (element != null) {
			if (iselementVisible(element, 10)) {

				if (iselementEnable(element, 10)) {
					element.clear();
					element.sendKeys(valueToenter);

				} else {
					System.out.println("Unable to enter the value into field " + element.toString()
							+ "is not enable after waiting ");
				}

			} else {
				System.out.println(
						"Unable to enter the value into field " + element.toString() + "is not visble after waiting ");
			}

		} else {
			System.out.println(
					"Unable to enter the value into field " + element.toString() + "is not found after waiting ");
		}

	}

	public static void clicklink(By by, int timeout) {

		WebElement element = creatElement(by, timeout);
		if (element != null) {
			if (iselementVisible(element, timeout)) {
				if (iselementEnable(element, timeout)) {

					element.click();

				} else {
					System.out.println("unable to clickbutton " + element.toString()
							+ "as the element is not enable after waiting " + timeout);

				}

			} else {
				System.out.println("unable to clickbutton " + element.toString()
						+ "as the element is not enable after waiting " + timeout);
			}

		} else {

			System.out.println(
					"unable to clickbutton " + by.toString() + "as the element is not found after waiting " + timeout);
		}

	}

}
