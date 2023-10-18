/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>
import 'cypress-file-upload';

it('file upload demo',()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})

it('File upload',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('nature.jpg')
    cy.get('#file-submit').click()
    cy.get('h3').should('contain.text','File Uploaded!')
})

it('file re-name',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'nature.jpg',fileName:'filenameupdated.jpg'})
    cy.get('#file-submit').click()
    cy.get('h3').should('contain.text','File Uploaded!')
}) 

it('Drag and drop',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('nature.jpg', {subjectType:'drag-n-drop'})
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('nature')
})

it('Muliple files upload',()=>{
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').attachFile(["mountains.jpg","nature.jpg"])
})

it.only('FileUpload - Shadow Dom',()=>{
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/')
    cy.get('.smart-button',{includeShadowDom:true}).attachFile('nature.jpg')
})

it('file download test',()=>{
    cy.downloadFile('http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-image.jpg','mydownloads','nature.jpg')
})