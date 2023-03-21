import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import LoginActions from '../Pages/LoginPage/LoginActions';

const loginpage = new LoginActions();

Given(/^I go to website$/, () => {
	loginpage.goToWebSite();
});


When(/^I fill the login and password with : "([^"]*)" and "([^"]*)"$/, (user,password) => {
	loginpage.fillLoginAndPasswordInput(user, password);
});

Then(/^click on Login button$/, () => {
	loginpage.clickOnLoginButton()
});


Then(/^I should be logged$/, () => {
	loginpage.checkLoginSuccessful()
});




