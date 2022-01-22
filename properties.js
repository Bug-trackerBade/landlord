import landlord from "../../fixtures/landlord-selectors.json"

describe("Test Login Features", function(){
    beforeEach(function(){
        cy.visit("/")
 
    })

    it("Valid Login - I should be able to login with valid email and pasword", function(){
        cy.get(landlord.emailInput).type(landlord.emailText)
        cy.get(landlord.passwordInput).type(landlord.passwordText)
        cy.get(landlord.logInButton).click()
    
    })

    it("Add property -I should be able to add property", function(){
        cy.get(landlord.propertiesSidebarMenu).click()
        cy.get(landlord.addAproppertyButton).click()
        cy.get(landlord.entireProperty).click()
        cy.get(landlord.setPropertyAddress).type('22 Harley Street, London, United Kingdom ', {force: true}).wait(5000).type("{downarrow}").type("{enter}").wait(500);
        cy.get(landlord.setPropertyAddress).type('22 Harley Street, London, United Kingdom', {force: true}).wait(5000);
        cy.get(landlord.propertyType, {force: true}).select()
        cy.get(landlord.selectFlat).click()
        cy.wait(3000)

    })
       
    it("Delete property -I should be able to delete property", function(){   
        cy.get(landlord.menuButton).click()
        cy.get(landlord.deleteButton).click()
        cy.get(landlord.deleteButton).click()

        
    }) 
         
    })

