import landlord from "../../fixtures/landlord-selectors.json"

describe("Test Login Features", function(){
    beforeEach(function(){
        cy.visit("/")
    
    })

    it("Invalid password - should not be able to request for forgot password", function(){
        cy.get(landlord.forgotPassword).click()
        cy.get(landlord.forgetEmailinput).type(landlord.invalidemailText2)
        cy.get(landlord.continueButton).click()
    
    })


    it("valid password - should be able to request for forgot password", function(){
        cy.get(landlord.forgotPassword).click()
        cy.get(landlord.forgetEmailinput).type(landlord.emailText)
        cy.get(landlord.continueButton).click()
    
    })
})