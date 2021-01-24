const { Given, When, Then} = require('cucumber');

Given(/^user follows "Sign In" from home page$/, function() {
    browser.url("http://automationpractice.com/index.php");
    $("//a[@class='login']").click();   
});

When(/^User enters valid email address and clicks on create account$/, function() {   
    console.log("inside function");
    browser.$("//input[@id='email_create']").setValue("Test123@gmail.com");
    browser.$("//button[@id='SubmitCreate']").click(); 
   
});

And(/^user fills all the mandatory fields"$/, function() {   
    
    browser.$("//input[@id='id_gender2']").click(); 
    browser.$("//input[@name='customer_firstname']").setValue("TestFname");
    browser.$("//input[@name='customer_lastname']").setValue("Lastname");
    browser.$("//input[@name='passwd']").setValue("Test@12345");
    browser.$$("//select[@id='days']").map(function(element)
    {
var day=element.getText();
if (day.equalsIgnoreCase("12")) {
    day.click();
}
    })
    
    browser.$$("//select[@id='months']").map(function(monthelement)
    {
var monthname=monthelement.getText();
if (monthname.equalsIgnoreCase("January")) {
    monthname.click();
}
    })

    browser.$$("//select[@id='years']").map(function(yearelement)
    {
var yearelem=yearelement.getText();
if (yearelem.equalsIgnoreCase("1990")) {
    yearelem.click();
}
    })

    browser.$("//input[@name='firstname']").setValue("TestFname");
    browser.$("//input[@name='lastname']").setValue("Lastname");
    browser.$("//input[@name='address1']").setValue("Metro 908");
    browser.$("//input[@name='city']").setValue("Foster city");
    
    var stateelement=browser.$$("//select[@name='id_state']").map(function(stateelem)
    {
var stateelem=stateelement.getText();
if (stateelem.equalsIgnoreCase("California")) {   
    stateelem.click();
}
    })
    browser.$("//input[@name='postcode']").setValue("94404");

    var Countrylist=browser.$$("//select[@name='id_country']").map(function(countryelem)
    {
var countryelem=Countrylist.getText();
if (countryelem.equalsIgnoreCase("United states")) {   
    countryelem.click();
}
    })

    browser.$("//input[@name='phone_mobile']").setValue("1234567890");
    browser.$("//input[@name='alias']").setValue("My address");
});
And(/^clicks on register$/, function() {   
    
    browser.$("//button[@id='submitAccount']").click(); 
   
})
Then(/^user should get Myaccount page$/, function() {   
    
    $("//h1[@class='page-heading']").isDisplayed()
    {
        console.log("User registered successfully");
    }
});