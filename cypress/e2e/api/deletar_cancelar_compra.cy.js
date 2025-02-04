

 // Registro excluído com sucesso
 describe('Registro excluído com sucesso', () => {
  it('Registro excluído com sucesso', () => {

    cy.postProdutoDiretoCarrinho({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
     
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    })
    cy.cancelarProdutocarrinho({

    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Registro excluído com sucesso. Estoque dos produtos reabastecido");
    });
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
        cy.cancelarProdutocarrinho({

        })
      })
    })
  
 
 
