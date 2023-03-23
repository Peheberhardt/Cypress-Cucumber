import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import { loginActions } from '../Pages/LoginPage/LoginActions';

Given(/^I go to website$/, () => {
	loginActions.goToWebSite();
});


When(/^I fill the login and password with : "([^"]*)" and "([^"]*)"$/, (user,password) => {
	loginActions.fillLoginAndPasswordInput(user, password);
});

Then(/^click on Login button$/, () => {
	loginActions.clickOnLoginButton()
});


Then(/^I should be logged$/, () => {
	loginActions.checkLoginSuccessful()
});




