Feature: Registration of a new user

  Scenario: Successfull registration
    Given user follows "Sign In" from home page
    When User enters valid email address and clicks on create account
    And user fills all the mandatory fields
    And clicks on register
    Then user should get Myaccount page
