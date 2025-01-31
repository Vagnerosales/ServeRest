

Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get('[data-testid="email"]').type('vagnerosales@gmail.com')
  cy.get('[data-testid="senha"]').type('123')
  cy.get('[data-testid="entrar"]').click()

})

Cypress.Commands.add('loginVazio', () => {
  cy.visit('/')
  cy.get('[data-testid="email"]').type('vagnerosales@gmail.com').clear()
  cy.get('[data-testid="senha"]').type('123').clear()
  cy.get('[data-testid="entrar"]').click()

})

Cypress.Commands.add('pesquisar', () => {
  cy.get('[data-testid="pesquisar"]').type("Teste333")
  cy.get('[data-testid="botaoPesquisar"]').click()
  
  cy.contains('Produtos').should('be.visible')

})

Cypress.Commands.add('pesquisa_nao_encontrada', () => {
  cy.visit('/')
  cy.login()

  cy.get('[data-testid="pesquisar"]').type('Bicicleta')
  cy.get('[data-testid="botaoPesquisar"]').click()

  cy.contains('Produtos').should('not.have.value')
  cy.get('p').should('not.have.value')

})
Cypress.Commands.add('logout', () => {
    cy.visit('/')
    cy.login()

    cy.get('[data-testid="logout"]').click()
    cy.contains('Login').should('be.visible')
})
Cypress.Commands.add('Adicionar_na_lista', () => {
  cy.get('[data-testid="pesquisar"]').type("geladeira")
  cy.get('[data-testid="botaoPesquisar"]').click()
  cy.get('[data-testid="adicionarNaLista"]').click()
  //cy.get('[data-testid="adicionar carrinho"]').click()
  cy.get('h1').should('be.visible')
 
})
  
Cypress.Commands.add('Lista_Adicionar_mais_uma_unidade', () => {
  cy.get('[data-testid="lista-de-compras"]').click()
  cy.get('[data-testid="product-increase-quantity"]').click()

}) 
Cypress.Commands.add('Lista_Limpar', () => {
  cy.get('[data-testid="lista-de-compras"]').click()
  cy.get('[data-testid="limparLista"]').click()
}) 

Cypress.Commands.add('cadastrar_usuario_novo', () => {
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('[data-testid="nome"]').type('vaniho')
  cy.get('[data-testid="email"]').type('vaninho5@gmail.com')
  cy.get('[data-testid="password"]').type('123')
  cy.get('[data-testid="cadastrar"]').click()
 // cy.get('.alert > :nth-child(2)').should('have.value','Cadastro realizado com sucesso')
  cy.get('.alert-link').should('be.visible')

}) 

Cypress.Commands.add('usuario_ja_cadastrado', () => {
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('[data-testid="nome"]').type('vaniho')
  cy.get('[data-testid="email"]').type('vaninho@gmail.com')
  cy.get('[data-testid="password"]').type('123')
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.alert > :nth-child(2)').should('be.visible')
 
})

Cypress.Commands.add('deletar_usuario', () => {
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('[data-testid="nome"]').type('vaniho')
  cy.get('[data-testid="email"]').type('vaninho@gmail.com')
  cy.get('[data-testid="password"]').type('123')
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.alert > :nth-child(2)').should('be.visible')
 
})
