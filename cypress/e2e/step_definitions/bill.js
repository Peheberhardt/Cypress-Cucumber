import {Given, When, Then, And, After} from '@badeball/cypress-cucumber-preprocessor'
import {billActions} from '../Pages/BillPage/BillActions'

	Given(/^I go to bill page$/, () => {
		billActions.goToBillPage()
	});
	
	
	When(/^I create a new bill$/, () => {
		billActions.createNewBill()
	});
	
	Then(/^the system should return : "([^"]*)"$/, (msg) => {
		billActions.checkSystemOutput(msg)
	});

	After(()=>{
		billActions.deleteBill()
	})

