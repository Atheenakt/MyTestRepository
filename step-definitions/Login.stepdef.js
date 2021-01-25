const { Given, When, Then} = require('cucumber');

Given(/^user follows "Sign In" from home page$/, function() {
    browser.url("http://automationpractice.com/index.php");
    $("//a[@class='login']").click();   
});

When(/^User enters invalid email address and password$/, function() {   
    console.log("inside function");
    browser.$("//input[@id='email']").setValue("Test123@gmail.com")
    browser.$("//input[@id='passwd']").setValue("Test123");
    browser.$("//button[@id='SubmitLogin']").click(); 
   
});
Then(/^User should see a message saying "Authentication failed"$/, function() {
    var loginmessage=$("//div[@Class='alert alert-danger']/ol/li").getText();
    console.log(loginmessage);
    
});

Given(/^user follows "Sign In" from home page$/, function() {
    browser.url("http://automationpractice.com/index.php");
    $("//a[@class='login']").click();   
});

When(/^User enters valid email address and password$/, function() {   
    console.log("inside function");
    browser.$("//input[@id='email']").setValue("TestUser124@gmail.com")
    browser.$("//input[@id='passwd']").setValue("Test@1234");
    browser.$("//button[@id='SubmitLogin']").click(); 
   
});
Then(/^User should be able to see Myaccount page$/, function() {
    $("//h1[@class='page-heading']").isDisplayed()
    {
        console.log("Logged in to the account successfully");
    }
    
});
