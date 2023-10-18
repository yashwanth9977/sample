/// <reference types="cypress"/>

describe('handling iframes',()=>{

    it('approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        var iFrame=cy.get('#mce_0_ifr')
                    .its('0.contentDocument.body')
                    .should('be.visible')
                    .then(cy.wrap)
        iFrame.clear().type('Adios Amigos{ctrl+a}')
        cy.get("[title='Bold']").click()
        cy.get("[title='Italic']").click()
        iFrame.click()
    })

    it('approach 2 - creating the method in commands file',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type('Adios Amigos{ctrl+a}')
        cy.get("[title='Bold']").click()
        cy.get("[title='Italic']").click()
    })


    //to install iframe package npm install -D cypress-iframe
    it.only('approach 3 - install the plug-in using the command ',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Adios Amigos{ctrl+a}')
        cy.get("[title='Bold']").click()
        cy.get("[title='Italic']").click()

    })


})