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
  // it("Should be able to message landlord", function(){
//        cy.get(landlord.propertyName).click()
//         cy.get(landlord.sendMessage).click()
//         cy.get(landlord.messageInput).type(landlord.messageText)
//         cy.get(landlord.liveChat).click()
//         cy.get(landlord.closeLivechat).click()
//         cy.get(landlord.sendButton).click()

    //  })

    // it("should be able to find property", function(){
    //     cy.get(landlord.findpropertyBtn).click()
    //      cy.get(landlord.searchInput).type(landlord.searchText)
        
        

    //  })
    





})