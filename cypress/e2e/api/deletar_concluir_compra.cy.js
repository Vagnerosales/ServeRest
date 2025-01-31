
 // Registro excluído com sucesso
describe('Deletar produto ', () => {  
  it('deletar', () => {
    cy.carrinhoCadastrado({
     
    })
    cy.concluirProdutocarrinho({
          method: 'DELETE',
          url:  'https://serverest.dev/carrinhos/concluir-compra',
       
        }).then((response) => {
          expect(response.status).to.gte(200);
          expect(response.body.message).to.equal("Registro excluído com sucesso");
      })
    })
  })
 
  // teste  teste teste 
  describe('Deletar produto ', () => {  
    it('deletar', () => {
      cy.concluirProdutocarrinho({
            method: 'DELETE',
            url:  'https://serverest.dev/carrinhos/concluir-compras',
         
          }).then((response) => {
            expect(response.status).to.gte(200);
            expect(response.body.message).to.equal("Não foi encontrado carrinho para esse usuário");
        })
      })
    })
    
   

 
 
 
