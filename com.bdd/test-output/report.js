$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 1842531800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 116232800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_click_on_login_button()"
});
formatter.result({
  "duration": 122463700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 5338100,
  "status": "passed"
});
});