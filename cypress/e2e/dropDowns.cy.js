/// <reference types="cypress"/>

describe('handling dropdowns', ()=>{

    it.skip('dd with select tag',()=>{
        cy.visit('https://www.zoho.com/people/logout.html')
        cy.get('#zcf_address_country').select('Sudan')
        cy.get('#zcf_address_country').should('have.value','Sudan')
    })

    it.skip('dd without select tag',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it.skip('Auto suggestion DD',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Guntur')
        cy.get('.suggestion-title').contains('Guntur West Assembly constituency').click()
    })

    it('Dynamic DD',()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('cypress')
        cy.wait(3000)

        cy.xpath("//div[@class='pcTkSc']/div/span").should('have.length', 22)

        cy.xpath("//div[@class='pcTkSc']/div/span").each(($el, index, $list)=>{
            if($el.text()=='cypress documentation')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('input.gLFyf').should('have.value', 'cypress documentation')
    })
})