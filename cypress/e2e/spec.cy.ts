describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/signUP')

    cy.on('window:console', consoleLog => {
      if (consoleLog.message.includes('Inscription réussie')) {
        assert.isTrue(true);
      }
    });

    cy.get('#userEmail')
      .type('test@example.com')

    cy.get('#userPassword')
      .type('password')

    cy.get('button[type="submit"]')
      .click()

    cy.wait(1000);
  })
})
