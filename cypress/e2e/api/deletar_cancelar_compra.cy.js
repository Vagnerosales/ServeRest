
 // Registro excluído com sucesso
describe('Deletar produto ', () => {  
  it('deletar', () => {
    cy.carrinhoCadastrado({
     
    })
    cy.cancelarProdutocarrinho({
          method: 'DELETE',
          url:  'https://serverest.dev/carrinhos/cancelar-compra',
       
        }).then((response) => {
          expect(response.status).to.gte(200);
          expect(response.body.message).to.equal("Registro excluído com sucesso. Estoque dos produtos reabastecido");
      })
    })
  })
 
  describe('Deletar produto ', () => {  
    it('deletar', () => {
      cy.cancelarProdutocarrinho({
            method: 'DELETE',
            url:  'https://serverest.dev/carrinhos/cancelar-compra',
         
          }).then((response) => {
            expect(response.status).to.gte(200);
            expect(response.body.message).to.equal("Não foi encontrado carrinho para esse usuário");
        })
      })
    })
   

 
 
 
