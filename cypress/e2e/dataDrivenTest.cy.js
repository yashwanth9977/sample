describe('dataDrivenTests',()=>{

    it('if need required only in the specific test case',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture("orangeHrmData").then((data)=>{

            data.forEach((userData) => {
                cy.get("input[name='username']").type(userData.username)
                cy.get("input[name='password']").type(userData.password)
                cy.get('.oxd-button').click()

                if(userData.username=='Admin' && userData.password=='admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text","Dashboard")
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.wait(2000)
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                cy.get('.oxd-alert').should('have.text',userData.expected)
                }
            })
        })
    })
})