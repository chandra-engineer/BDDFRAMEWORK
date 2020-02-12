package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\chandra\\BDDSELENIUMFRAMEWORK\\Feature\\Backround.feature",dryRun = false, glue={"StepDefinition"},
				monochrome=true,
				plugin= { "pretty", "json:target/BackroundReorts/CucumberB.json",
						 "junit:target/BackroundReorts/CucumberB.xml",
				 "html:test-output"})
public class Runner {

}