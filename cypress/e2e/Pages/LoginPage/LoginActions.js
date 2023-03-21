/// <references types =”cypress”/>


export default class LoginActions {

    goToWebSite(){
        let url = Cypress.config('baseUrl')
        cy.visit(url)
    }

    fillLoginAndPasswordInput(user, password){
        cy.get("[data-test='email']")
            .should('be.visible')
            .type(user)
        cy.get("[data-test='passwd']")
            .should('be.visible')
            .type(password)
    }

    clickOnLoginButton(){
        cy.get('.btn')
            .should('be.visible')
            .click()
    }

    checkLoginSuccessful(){
        cy.get("[class='toast-message']")
            .should('have.text', 'Bem vindo, pedro!')
            .click()
    }

}