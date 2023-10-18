// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require('cypress') //- when i got an error, i commented out this line

/// <reference types="cypress" />


require('cypress-downloadfile/lib/downloadFileCommand')
require('cypress-xpath')
require('cypress-iframe')
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('getIframe',(iFrame)=>{
    return cy.get(iFrame)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

Cypress.Commands.add('clickLink',(link)=>{
    cy.get('a').contains(link,{matchCase:false}).click()
})

// Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options)=>{
//     if(typeof text === 'object')
//     {
//         options = text
//         text = filter
//         filter = undefined
//     }
//     options.matchCase = false
//     return originalFn(subject,filter,text,options)
// })

 Cypress.Commands.add('loginApp',(user,password)=>{
    cy.get("input[name='username']").type(user)
    cy.get("input[name='password']").type(password)
    cy.get('.oxd-button').should('be.visible').click()
 })
