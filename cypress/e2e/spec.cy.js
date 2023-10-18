describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('pass', function(){


    cy.get('.navbar-brand').click()
  })
})