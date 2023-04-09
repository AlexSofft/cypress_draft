describe('template spec', () => {

  beforeEach(() => {
    cy.session('name', () => {
      cy.visit('/')
      cy.intercept('GET', `https://theguarantors.com/login`).as('login');
      cy.contains('Sign In')
        .invoke('removeAttr', 'target')
        .click({ force: true })
      cy.wait('@login').its('response.statusCode').should('eq', 200);

      cy.get("input[type='email']").type(Cypress.env('email'));
      cy.get("input[type='password']").type(Cypress.env('password'));
      cy.intercept('GET', `https://theguarantors.com/application?`).as('resume');
      cy.contains('Login').click()
      cy.wait('@resume').its('response.statusCode').should('eq', 200);
      
      cy.document().its('cookie').should('contain', '_gat_UA-83295386-2')
    })
     cy.visit('https://theguarantors.com/application?')
  });


  it('resume button', () => {
    // cy.visit('https://theguarantors.com/application?')
    cy.get('.app-btn').should('contain', 'Resume')
  })

  it('resume button 2', () => {
    // cy.visit('https://theguarantors.com/application?')
    cy.get('.app-btn').should('contain', 'Resume')
  })

  it('resume button 3', () => {
    // cy.visit('https://theguarantors.com/application?')
    cy.get('.app-btn').should('contain', 'Resume')
  })
})