

describe('Pesquisar', () => {

  beforeEach(function(){
    cy.login()
  })

  it('pesquisar', () => {
    cy.pesquisar()
  })
  
  it('pesquisa_nao_encontrada', () => {
    cy.pesquisa_nao_encontrada()
   
  })
})
 // pesquisa_nao_encontrada