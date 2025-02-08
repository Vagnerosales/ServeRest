import '../../../support/gui_commands'

describe('Logout', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    cy.logout()
    cy.contains('Login').should('be.visible')
    cy.get('[data-testid="entrar"]').should('be.visible')
  })
})
