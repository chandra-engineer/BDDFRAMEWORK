package com.GenericMethods;

import java.io.FileInputStream;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.openqa.selenium.By;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class XmlObjects {

	public static Document document;

	public static By getelement(String elementName) {
		By by = null;
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		try {
			FileInputStream fis = new FileInputStream("C:\\chandra\\BDDSELENIUMFRAMEWORK\\XmlObjects\\Objects.xml");
			DocumentBuilder db = dbf.newDocumentBuilder();
			document = db.parse(fis);

		} catch (ParserConfigurationException | SAXException | IOException e) {
			System.out.println("Unable to read the Object repository. Exception info : " + e.getMessage());
			System.exit(0);
		}
		NodeList allElements = document.getElementsByTagName(elementName);
		if (allElements.getLength() == 0) {
			System.out.println("THe element '" + elementName + "' is not found in Object Repository.");
			System.exit(0);
		} else {
			Element elementNode = (Element) allElements.item(0);

			boolean hasLocatorAttribute = elementNode.hasAttribute("locator");
			boolean hasValueAttribute = elementNode.hasAttribute("value");

			if (hasLocatorAttribute && hasValueAttribute) {
				String locatorName = elementNode.getAttribute("locator");
				String locatorValue = elementNode.getAttribute("value");

				switch (locatorName.toLowerCase()) {
				case "name":
					by = By.name(locatorValue);
					break;
				case "id":

					by = By.id(locatorValue);
					break;

				case "linktext":
					by = By.linkText(locatorValue);
					break;

				case "partiallinktext":
					by = By.partialLinkText(locatorValue);
					break;

				case "classname":
					by = By.className(locatorValue);
					break;

				case "css":
					by = By.cssSelector(locatorValue);
					break;

				case "xpath":
					by = By.xpath(locatorValue);
					break;

				case "tagname":
					by = By.tagName(locatorValue);
					break;

				default:
					System.out.println("the locator : " + locatorName + " is invalid for the  element '" + elementName
							+ "' . Locator must be given in the list ('name','id','css','linktext','partiallinktext','xpath','class','tagname')");
					break;
				}

			}

			return by;

		}
		return by;

	}

}
