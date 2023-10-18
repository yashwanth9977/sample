describe('handling the tables',()=>{

    beforeEach('opening the url and providing the credentials',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer > .parent').click()
        cy.get('#collapse-5 > :nth-child(1) > a').click()

    })

    it.skip('checking number of rows & columns present',()=>{
        cy.xpath("//div[@class='table-responsive']//tbody//tr").should('have.length','10')
        cy.xpath("//div[@class='table-responsive']//table//thead//tr//td").should('have.length','7')

    })

    it.skip('check the data from the specific cell',()=>{
        cy.xpath("//div[@class='table-responsive']//tbody//tr[6]//td[3]").contains('likitakotian123@gmail.com')
    })

    it.skip('Reading all the data in table in the 1st page',()=>{
        cy.xpath("//div[@class='table-responsive']//tbody//tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols)=>{
                        cy.log($col.text())
                    })
                })
         })
    })


    it('pagination',()=>{
        
        // first find the number of pages that are present
        var totPages
        cy.xpath("//div[@class='col-sm-6 text-end']").then((e)=>{
            var compTxt = e.text()
            totPages = compTxt.substring(compTxt.indexOf("(")+1, compTxt.indexOf("Pages")-1)
            cy.log("Total number pages in a table "+totPages)
        })

        let numPages=5

        for(let p=1; p<=numPages; p++)
        {
            if(numPages>1)
            {
                cy.log("activepage is "+p+"")
                cy.xpath("//ul[@class='pagination']//li["+p+"]").click()
                cy.wait(3000)
                cy.xpath("//div[@class='table-responsive']//tbody//tr")
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.xpath('td[3]').then((email)=>{
                                cy.log(email.text())
                            })
                        })
                    })
            }
        }
    })
    
})