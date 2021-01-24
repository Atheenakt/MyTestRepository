Feature: Login validation

  Scenario: Unsuccessful login
    Given user follows "Sign In" from home page
    When User enters invalid email address and password
    Then User should see a message saying "Authentication failed"

