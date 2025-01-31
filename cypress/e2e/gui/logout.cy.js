describe('Logout', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    cy.logout()
    cy.contains('Login').should('be.visible')
  })
})
