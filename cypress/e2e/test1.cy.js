/// <reference types="cypress" />

it('Search on google home page',() => {     //it('Search on google home page', function() {}) can also mention as this intead of using =>
    
    cy.visit('https://google.com')
    cy.get('.gLFyf',{timeout:6000}).type('Ariqt International{Enter}')
    // cy.contains('Google Search').click()
    cy.wait(2000)
    cy.contains('Videos').click()
}) 


