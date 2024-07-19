describe('Login page Tests', () => {
    it('TC01:Visit the skill captain website url',() => {
      //Visit the login page
      cy.visit('https://skillcaptain.app/fe/goal/22');
      cy.url().should('include','app');
      cy.url().should('include','skillcaptain');
      cy.url().should('eq','https://skillcaptain.app/unicorn/auth/login');
      cy.url().should('contain','skillcaptain');
    })
    it('TC02:Login with skill captain credentials',() => {
      //Visit the login page
      cy.visit('https://skillcaptain.app/fe/goal/22');
      //added idname(email) starts with hash sign
      //Create Emails
      //Did a small modification so that you can decied the email length you need
      const emails = (val) => {
        var email = "";
        var possible = "abcd@.gh";
        for (var i = 0; i < val; i++){
          email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return email;
      }
      //validate emails
      const validateEmail = (email) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      }
      for (let index = 0; index < 10; index++) {
        const TestEmail = emails(10)
        const EmailState = validateEmail(TestEmail)
        it("EmailTest -"+ TestEmail +" - " + EmailState,() => {
          cy.get('#email').type('pokalanaimisha123@gmail.com')
          cy.get('.nextBtn').click();
          if(!EmailState){
            cy.get('.error-message').should('be.visible');
          }
          else{
            cy.get('.error-message').should('not.be.visible');
          }
        })
      }
      //Enter email id
      cy.get('#email').type('pokalanaimisha123@gmail.com');
      //Password validation
      cy.get('#password-input').type('Naimisha@12345');
      //Click the login button
      cy.get('.loginButton').click();
    })
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })