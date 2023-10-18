// Create a custom command in the support>>>comands.js

describe('custom Comands',()=>{

    it('handling the links',()=>{
        cy.visit('https://demo.nopcommerce.com/cell-phones')
        cy.clickLink('HTC One M8 Android L 5.0 Lollipop')
        cy.get("div[class='product-name'] h1").contains('HTC One M8 Android L 5.0 Lollipop')
    })

    it('overwriting the contains command for match case',()=>{
        cy.visit('https://demo.nopcommerce.com/cell-phones')
        cy.clickLink('HTC ONE M8 ANDROID L 5.0 LOLLIPOP')
        cy.get("div[class='product-name'] h1").contains('HTC ONE M8 ANDROID L 5.0 LOLLIPOP',{matchCase:false})
    })

    it.only('created custom command for login',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.loginApp('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })


})