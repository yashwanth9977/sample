    it('assertionsdemo', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()
      cy.get('#query-btn')
                    .should('contain','Button')
                    .should('have.class','query-btn btn btn-primary')
                    .should('be.visible')
                    .should('be.enabled')

      cy.get('#query-btn')                              //the above one is individual here we are linking the assertions using and 
                    .should('contain','Button') // not stable
                    .and('have.class','query-btn btn btn-primary')
                    .and('be.visible')
                    .and('be.enabled')


        expect(true).to.be.true

        assert.equal(4,'4','Not Equal')
        assert.strictEqual
    })
