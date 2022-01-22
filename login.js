import landlord from "../../fixtures/landlord-selectors.json"

    describe("Test Login Features", function(){
    beforeEach(function(){
        cy.visit("/")


    })

it("Invalid Login -I should not be able to login with invalid email or passwiord", function(){
    cy.wait(9000)
    cy.get(landlord.emailInput).type(landlord.invalidemailText)
    cy.get(landlord.passwordInput).type(landlord.passwordText)
    cy.get(landlord.logInButton).click()

}) 

it("Valid Login - I should be able to login with valid email and pasword", function(){
    cy.get(landlord.emailInput).type(landlord.emailText)
    cy.get(landlord.passwordInput).type(landlord.passwordText)
    cy.get(landlord.logInButton).click()

}) 

it("Logout - I should be able to logout", function(){
   cy.get(landlord.profileDropDown).click()
   cy.get(landlord.logout).click({multiple:true})

   it("Add property - I should be able to Add property", function(){ 
       cy.get(landlord.emailInput).type(landlord.emailText)
       cy.get(landlord.passwordInput).type(landlord.passwordText)
       cy.get(landlord.logInButton).click()
       cy.get(landlord.prop)     
   
}) 

})

})