/// <reference types="cypress"/>

describe('Mouse operations',()=>{

        // cypress documentations  "https://docs.cypress.io/api/commands/trigger"
    it('Mouse Hover',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get(':nth-child(5) > ._28p97w').trigger('mouseover')
    })

    it('Right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        
                //approach1 to trigger the menu

       /* cy.xpath("//span[contains(text(),'right click me')]").trigger('contextmenu')
        cy.get('.context-menu-icon-quit').should('be.visible')
        
             cy.on('window:alert',(t)=>{
                 expect(t).to.contains('clicked: quit');
                })
          cy.get('.context-menu-icon-quit').click()  */

                //approach 2 using the right click method  

        cy.xpath("//span[contains(text(),'right click me')]").rightclick();
        cy.get('.context-menu-icon-quit').should('be.visible')

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('clicked: quit');
            })
        cy.get('.context-menu-icon-quit').click()

    })

    it('Double click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')

                    // Approach 1 --- use the trigger event

    //    cy.iframe('#iframeResult').find('#field2').should('be.empty')
    //    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
    //    cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

                    // Approach 2 --- using the method dblclick
        
        cy.iframe('#iframeResult').find('#field2').should('be.empty')
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })

    it('Drag and Drop using the Plug-in',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
                
        //neeed to install the plug-in using --->>>>>npm install --save-dev @4tw/cypress-drag-drop
    //    cy.get('#box6').drag('#box106', {force:true})    //this not working as expected, it is not droping 

        // using the trigger component
        cy.get('#box6').trigger('mousedown', { button: 0 })
        cy.wait(3000)
        cy.get('#box106').trigger('mousemove').trigger('mouseup', { force: true })
        
        //find this using the Chat.openai.com 
            const myElement = cy.get('#box6')
            myElement.should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal('rgb(0, 255, 0)'); // Replace with your expected color
            });
    })

    it('scroll down',()=>{
        cy.visit('https://www.amazon.com/ref=nav_logo')
        cy.get('.navFooterBackToTopText').scrollIntoView({duration:2000})
        cy.get('#nav-logo-sprites').scrollIntoView({duration:4000})
    })
})