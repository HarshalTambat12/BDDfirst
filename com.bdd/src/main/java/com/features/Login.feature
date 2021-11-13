Feature:  JBK offline website

Scenario: login test

Given user should be on login page
When  user enters valid credentials
And   user click on login button
Then  user will be on home page
