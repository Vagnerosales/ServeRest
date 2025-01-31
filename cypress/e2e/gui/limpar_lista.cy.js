describe('Limpar a lista', () => {

  it('Limpar a lista', () => {
    cy.login()
    cy.Adicionar_na_lista()
    cy.Lista_Limpar()
  
  })
})