/// <reference types="cypress" />

import testData from '../fixtures/example.json' 

before(function(){
    cy.fixture('example.json').as('testData')
})

it('Read files using Fixture', () => {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

    cy.log(testData.email)

})

it('read file using readFile()', ()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.body)
    })
})

it('Write file demo', ()=>{
 
    cy.writeFile('sampleUsingWriteFile.txt', 'Hello, i am added using the write file demo \n')
    cy.writeFile('sampleUsingWriteFile.txt', "Iam added in the new line using the flag: 'a+'", {flag: 'a+'})

})