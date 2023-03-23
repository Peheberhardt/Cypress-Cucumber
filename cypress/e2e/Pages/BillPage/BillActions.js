import { billName, setBillName } from "../../SupportFiles/Variables";

class BillActions{
    goToBillPage(){
        cy.Get("[data-test='menu-settings']").click()
        cy.Xpath("//a[text()='Contas']").click()
    }
    fillBillInput(){
        const number = Math.floor((Math.random() * 100) + 1)
        const name = `Conta automatizada ${number}`
        cy.Get("[placeholder='Conta...']").type(name)
        setBillName(name)
    }
    createButton(){
        cy.Get("[alt='Salvar']").click()
    }

    createNewBill(){
        this.fillBillInput()
        this.createButton()
    }

    checkSystemOutput(msg){
        cy.CheckMsg(msg)
    }

    deleteBill(){
        cy.Xpath(`//td[text()='${billName}']/..//i[@class='far fa-trash-alt']`).click()
        cy.CheckMsg('Conta excluída com sucesso!')
    }

}

export const billActions = new BillActions();