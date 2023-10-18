/// <reference types="cypress"/>

describe('Handling child tabs',()=>{

    it('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.go('back') //to navigate to parent window
    })

    it.only('Approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')  //using this approach if the domain is same it is fine but if the domain is defferent this approach wont be applicable
        cy.get('.example > a').then((element)=>{
            var url = element.prop('href');
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')

    })









})