

describe('Testes da AMBEV', function() {
  beforeEach(function(){
    cy.login()
    
  })
  it('Login Sucesso', function() {
    cy.login()
    cy.contains('Produtos').should('be.visible')
  }) 

  it('Login Erro', function() {
    cy.login('vagnerosales@gmail.com', '1234')
    cy.contains('Produtos').should('be.visible')
  }) 

  it('Login Vazio', function() {
    cy.loginVazio()
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible')
    cy.get('.form > :nth-child(4)').should('be.visible')
  }) 
})
