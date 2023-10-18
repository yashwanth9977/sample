describe('navigations',()=>{

    it('forward/back/reload',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Register')
        cy.get('.page-title').should('have.text','Register')
        
        //...............set to navigate back.................

        //cy.go('back')
        cy.go(-1)

        //.............set to proceed forward
        //cy.go('forward')
        cy.go(1)

        cy.reload()
    })

})