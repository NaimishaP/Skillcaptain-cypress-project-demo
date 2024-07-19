describe('Validate Home Page', () => {
    before(() => {
        cy.visit('https://skillcaptain.app/fe/goal/22');
        //Enter email id
        cy.get('#email').type('pokalanaimisha123@gmail.com');
        //Enter password
        cy.get('#password-input').type('Naimisha@12345');
        //Click the login button
        cy.get('.loginButton').click();
    })
    it('TC03: It should have correct details ',() => {
        cy.contains('Welcome to SkillCaptain').should('be.visible');
        cy.contains('Hello Naimisha Pokala').should('exist');
        cy.contains('Our Trackers').should('exist');
        cy.contains('Certificates').should('exist');
        cy.contains('DSA').should('exist');
        cy.contains('DSA: Strings').click();
        cy.contains('Day 1').should('exist');
        cy.contains('Isomorphic Strings').click();
        cy.contains('Concept:').should('exist');
        cy.contains('Assignment:').should('exist');
        //cy.contains('Submit via editor').click();
})
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })