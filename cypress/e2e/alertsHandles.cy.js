/// <reference types="cypress"/>

describe('different alerts', () => {
    it('passes', () => {

      //to change the resolution of the headless screen
      cy.viewport(1024, 768)

      cy.visit('https://trytestingthis.netlify.app/index.html')
      
      // to click on the alert page
      cy.get('.pop-up-alert > button').click()
      
      //asserting the alert using window handles as it doesnt get displayed in the cypress
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('Press a button!');
      })

      cy.get('.pop-up-alert > #demo').should('have.text','You Pressed the OK Button!')

    })

    it('Js alert',()=>{

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get(':nth-child(1) > button').click()
      
      cy.on('window:alert',(text)=>{
        expect(text).to.contains('I am a JS Alert');
      })

      cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('Js confirm alert ok(success)',()=>{

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get(':nth-child(2) > button').click()
      
      cy.on('window:confirm',(text)=>{
        expect(text).to.contains('I am a JS Confirm');
      })
      cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Js confirm alert cancel',()=>{

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get(':nth-child(2) > button').click()
      
      cy.on('window:confirm',(text)=>{
        expect(text).to.contains('I am a JS Confirm');
      })

      cy.on('window:confirm',()=>false)    // cypress close alert window using cancel button

      cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it('Js PROMPT ALERT',()=>{

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      var promptmsg = "Welcome"
      cy.window().then((win)=>{
        cy.stub(win,'prompt').returns(promptmsg)
      })
      cy.get(':nth-child(3) > button').click()

      cy.get('#result').should('have.text','You entered: '+promptmsg)

    })

    it('Authentication Alert',()=>{

      cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: 
                                                                  {
                                                                    username:"admin",
                                                                    password:"admin"
                                                                  }
                                                                })
      cy.get("div[class='example'] p").should('have.contain','Congratulations!')                                                             
    })

    it('Alternate Authentication Alert',()=>{

      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')  //added the text admin:admin(i.e. username, password) to the url
      cy.get("div[class='example'] p").should('have.contain','Congratulations!')                                                             
    })

  })