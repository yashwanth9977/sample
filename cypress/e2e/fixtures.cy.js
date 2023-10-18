// how not to hardcode data
describe('fixtuers folder',()=>{

    it('if need required only in the specific test case',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture("orangeHrm").then((data)=>{
        cy.get("input[name='username']").type(data.username)
        cy.get("input[name='password']").type(data.password)
        })
    })
})

//if same fixtures is used in the multiple test cases or it blocks
describe('Fixtures',()=>{

    let userdata;
    before(()=>{
        cy.fixture("orangeHrm").then((dataa)=>{
            userdata=dataa;
        })
    })

    it('With fixture out side',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type(userdata.username)
        cy.get("input[name='password']").type(userdata.password)
    })

})