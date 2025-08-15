import '../../support/gui_commands'

describe('Testes da A', function() {
 
  it('Login Sucesso', function() {
    cy.login()
    cy.contains('Produtos').should('be.visible')
  }) 

  it('Login Erro', function() {
    cy.loginErro()
    cy.get('.alert > :nth-child(2)').should('be.visible')
    
  }) 

  it('Login Vazio', function() {
    cy.loginVazio()
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible')
    cy.get('.form > :nth-child(4)').should('be.visible')
  }) 
})
