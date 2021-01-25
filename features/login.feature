Feature: Login validation

  Scenario1: Unsuccessful login
    Given user follows "Sign In" from home page
    When User enters invalid email address and password
    Then User should see a message saying "Authentication failed"

Scenario2: Successful login
    Given user follows "Sign In" from home page
    When User enters valid email address and password
    Then User should be able to see Myaccount page
