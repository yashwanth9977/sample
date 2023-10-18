import { loginPage } from "./pages/login_page"
const LoginPage = new loginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
describe('All login Test', function () {

    it('login with valid creds', () => {
        LoginPage.enterUserName('Admin')
        LoginPage.enterPassword('admin123')
        LoginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    })

    it('login test - invalid', () => {
        LoginPage.enterUserName('Admin')
        LoginPage.enterPassword('admin1234')
        LoginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    })
})

it('login test 2 - invalid', () => {
    LoginPage.enterUserName('Adminn')
    LoginPage.enterPassword('admin123')
    LoginPage.clickLogin()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
})